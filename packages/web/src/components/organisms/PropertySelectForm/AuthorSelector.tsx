import React from 'react'
import { Select } from 'antd'
import { useListPropertyMetaQuery } from '@dev/graphql'

interface Props {
  query: string
  author: string
  disabled: boolean
  onSearch: (value: string) => void
  onChange: (value: string) => void
}

const { Option } = Select

export const AuthorSelector = ({ query, onSearch, onChange, author, disabled }: Props) => {
  const { data } = useListPropertyMetaQuery({ variables: { author, ilike: `%${query}%` } })

  return (
    <Select
      showSearch
      placeholder="Please select"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      disabled={disabled}
    >
      {data &&
        data.property_meta.map(({ property }) => (
          <Option value={property} key={property}>
            {property}
          </Option>
        ))}
    </Select>
  )
}
