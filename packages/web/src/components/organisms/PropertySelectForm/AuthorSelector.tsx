// @L2 optimized
import React from 'react'
import { Select } from 'antd'
import { useListPropertyMetaQuery } from '@dev/graphql'
import { useIsL1 } from 'src/fixtures/wallet/hooks'
import Text from 'antd/lib/typography/Text'

interface Props {
  author: string | undefined
  label: string
  onChange: (propertyAddress: string) => void
}

const { Option } = Select

export const AuthorSelector = ({ author, onChange }: Props) => {
  const { isL1 } = useIsL1()
  const { data, loading } = useListPropertyMetaQuery({
    variables: {
      author: author || ''
    },
    skip: !author
  })

  return isL1 ? (
    <Select
      loading={loading}
      placeholder="Please select"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      {data &&
        data.property_meta.map(({ name, property }) => (
          <Option value={property} key={property}>
            {name}
          </Option>
        ))}
    </Select>
  ) : (
    <Text type="secondary">(Not provide this feature yet on L2)</Text>
  )
}
