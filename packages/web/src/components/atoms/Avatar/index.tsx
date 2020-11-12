import React from 'react'
import styled from 'styled-components'
import Jdenticon from 'react-jdenticon'

type Props = {
  url?: string
  key?: string
  size: string | number
}

const AvatarImage = styled.div`
  img {
    border-radius: 90px;
  }
`

export const Avatar = ({ url, key, size }: Props) => {
  return (
    <AvatarImage>
      {url ? (
        <img src={url} alt="avatar" style={{ width: `${size}px` }} />
      ) : (
        <Jdenticon value={key || ''} size={size} />
      )}
    </AvatarImage>
  )
}
