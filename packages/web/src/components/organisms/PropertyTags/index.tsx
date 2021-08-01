import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import { Button, Form, Input, Tag } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useGetProperty, usePostTag, useUpdateProperty } from 'src/fixtures/dev-for-apps/hooks'
import { Tag as PropertyTag, getTags } from 'src/fixtures/dev-for-apps/utility'
import { H3 } from 'src/components/atoms/Typography'

interface Props {
  propertyAddress: string
}

interface TagsFormProps {
  propertyAddress: string
  propertyTags?: string[]
  accountAddress?: string
}

const Wrap = styled.div``

const InputTag = styled(Tag)`
  margin: 0 0.5em;
`

const PropertyTagText = styled(Tag)`
  margin: 0 0.5em;
`
const InputTagForm = styled(Input)`
  margin: 0 0.5em;
`

export const TagsForm = ({ propertyAddress, propertyTags, accountAddress }: TagsFormProps) => {
  const [tags, setTags] = useState<string[]>(propertyTags || [])
  const [inputVisible, setInputVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const { postTagsHandler: postTag, isLoading } = usePostTag(propertyAddress, accountAddress || '')
  const { data: property } = useGetProperty(propertyAddress)
  const { putPropertyHandler: updateProperty } = useUpdateProperty(
    property?.id || -1,
    accountAddress || '',
    propertyAddress
  )
  const onSaveTags = useCallback(async () => {
    const unsavedTags = tags.filter((t: string) => (propertyTags || []).includes(t) === false)
    if (unsavedTags.length > 0) {
      const existTags = await getTags(unsavedTags)
      const existTagIds = existTags.map((t: PropertyTag) => t.id) || []
      const notExistTags = unsavedTags.filter(
        (unsavedTag: string) => existTags.filter((t: PropertyTag) => t.name === unsavedTag).length !== 1
      )
      const results = await Promise.all(
        notExistTags.map(async (tag: string) => {
          return await postTag(tag)
        })
      )
      // check error
      if (R.not(R.all(R.equals(undefined))(results.map((result: any) => result?.error)))) {
        return
      }

      // TODO: remove tags
      const tagIds = property?.tags.map((tag: PropertyTag) => tag.id) || []
      const resultTagIds =
        results.map((result: any) => result?.data).map((result: PropertyTag | void) => (result ? result.id : -1)) || []
      const savedTags: number[] = [...tagIds, ...existTagIds, ...resultTagIds]
      updateProperty(property?.name, property?.description, undefined, undefined, undefined, savedTags)
    }
  }, [postTag, tags, propertyTags, property, updateProperty])
  const onCloseTag = useCallback(
    (removedTag: string) => {
      if (removedTag && tags.indexOf(removedTag) !== -1) {
        setTags(tags.filter((tag: string) => tag !== removedTag))
      }
    },
    [tags]
  )
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue])
    }
    setInputVisible(false)
    setInputValue('')
  }
  const showInput = () => {
    setInputVisible(true)
  }

  return (
    <Form onFinish={() => onSaveTags()}>
      {tags.map((tag: string) => (
        <PropertyTagText closable onClose={() => onCloseTag(tag)} key={tag}>
          {tag}
        </PropertyTagText>
      ))}
      {!inputVisible && (
        <InputTag onClick={showInput}>
          <PlusOutlined />
          New Tag
        </InputTag>
      )}
      {inputVisible && (
        <InputTagForm
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      <Button
        type="primary"
        htmlType="submit"
        size="small"
        disabled={isLoading || tags === propertyTags}
        loading={isLoading}
      >
        Save
      </Button>
    </Form>
  )
}

export const PropertyTags = ({ propertyAddress }: Props) => {
  const { accountAddress } = useProvider()
  const { data, found } = useGetProperty(propertyAddress)
  const tags = useMemo(() => (found && data ? data?.tags?.map((tag: PropertyTag) => tag.name) : []), [found, data])

  return (
    <Wrap>
      <H3>Tags</H3>
      <TagsForm propertyAddress={propertyAddress} propertyTags={tags} accountAddress={accountAddress} />
    </Wrap>
  )
}
