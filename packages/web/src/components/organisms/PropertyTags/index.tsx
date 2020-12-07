import React, { useCallback, useState } from 'react'
import { Button, Form, Input, Tag } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useGetPropertyTags, usePostPropertyTags } from 'src/fixtures/dev-for-apps/hooks'
import styled from 'styled-components'

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

const PropertyTag = styled(Tag)`
  margin: 0 0.5em;
`
const InputTagForm = styled(Input)`
  margin: 0 0.5em;
`

export const TagsForm = ({ propertyAddress, propertyTags, accountAddress }: TagsFormProps) => {
  const [tags, setTags] = useState<string[]>(propertyTags || [])
  const [inputVisible, setInputVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const { postPropertyTagsHandler: postPropertyTags, isLoading } = usePostPropertyTags(
    propertyAddress,
    accountAddress || ''
  )
  const onSaveTags = useCallback(async () => {
    postPropertyTags(tags.join(' '))
  }, [postPropertyTags, tags])
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
        <PropertyTag closable onClose={() => onCloseTag(tag)} key={tag}>
          {tag}
        </PropertyTag>
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
      <Button type="primary" htmlType="submit" size="small" disabled={isLoading} loading={isLoading}>
        Save
      </Button>
    </Form>
  )
}

export const PropertyTags = ({ propertyAddress }: Props) => {
  const { accountAddress } = useProvider()
  const { data: propertyTags } = useGetPropertyTags(propertyAddress || '')

  return (
    <Wrap>
      <p>Property Tags</p>
      {propertyTags && (
        <TagsForm propertyAddress={propertyAddress} propertyTags={propertyTags?.tags} accountAddress={accountAddress} />
      )}
    </Wrap>
  )
}
