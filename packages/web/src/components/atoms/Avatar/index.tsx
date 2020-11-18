import React from 'react'
import styled from 'styled-components'
import Jdenticon from 'react-jdenticon'

type Props = {
  url?: string
  genkey?: string
  size: string | number
  className?: string
}

const AvatarImage = styled.div`
  img {
    border-radius: 90px;
    max-width: 100%;
  }
`

export const Avatar = ({ url, genkey, size, className }: Props) => {
  return (
    <AvatarImage className={className}>
      {url ? (
        <img src={url} alt="avatar" style={{ width: `${size}px` }} />
      ) : (
        <Jdenticon value={genkey || ''} size={`${size}`} />
      )}
    </AvatarImage>
  )
}
