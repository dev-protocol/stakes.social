import React from 'react'
import { Select } from 'antd'
import { useListPropertyMetaQuery } from '@dev/graphql'

interface Props {
  author: string | undefined
  label: string
  onChange: (propertyAddress: string) => void
}

const { Option } = Select

export const AuthorSelector = ({ author, onChange }: Props) => {
  const { data, loading } = useListPropertyMetaQuery({
    variables: {
      author: author || ''
    },
    skip: !author
  })

  return (
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
  )
}
