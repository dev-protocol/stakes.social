import React from 'react'
import styled from 'styled-components'
import Jdenticon from 'react-jdenticon'

type Props = {
  url?: string
  genkey?: string
  size: string | number
}

const AvatarImage = styled.div`
  img {
    border-radius: 90px;
  }
`

export const Avatar = ({ url, genkey, size }: Props) => {
  return (
    <AvatarImage>
      {url ? (
        <img src={url} alt="avatar" style={{ width: `${size}px` }} />
      ) : (
        <Jdenticon value={genkey || ''} size={`${size}`} />
      )}
    </AvatarImage>
  )
}
