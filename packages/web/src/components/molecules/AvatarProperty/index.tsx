import React, { useEffect, useState } from 'react'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'
import { Property } from 'src/fixtures/dev-for-apps/utility'
import { Avatar } from 'src/components/atoms/Avatar'

type Props = {
  propertyAddress?: string
  size: string | number
}

export const AvatarProperty = ({ propertyAddress, size }: Props) => {
  const [data, setData] = useState<Property>()
  const { data: property } = useGetProperty(propertyAddress)
  useEffect(() => {
    if (property) {
      setData(property)
    }
  }, [property])

  return <Avatar url={data?.avatar?.url} genkey={propertyAddress} size={size}></Avatar>
}
