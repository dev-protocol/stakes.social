import React from 'react'
import styled from 'styled-components'

type Props = {
  url?: string
  genkey?: string
  size: string | number
}

const AvatarImage = styled.div`
  img {
    border-radius: 90px;
    padding: 5px;
    border: 1px solid lightgrey;
  }
`

const AvatarPlaceholder = styled.div<{ size: string | number }>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 90px;
  background-image: linear-gradient(to right, #36d1dc, #5b86e5);
`

export const Avatar = ({ url, size }: Props) => {
  return (
    <AvatarImage>
      {url ? (
        <img src={url} alt="avatar" style={{ height: `${size}px`, width: `${size}px` }} />
      ) : (
        <AvatarPlaceholder size={size} />
      )}
    </AvatarImage>
  )
}
