import React from 'react'
import styled from 'styled-components'
import hash from 'string-hash'
import color from 'tinycolor2'

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

export const AvatarPlaceholder = styled.div<{ size: string | number; firstColour?: string; secondColour?: string }>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 90px;
  background-image: ${props =>
    props.firstColour && props.secondColour
      ? `linear-gradient(to right, ${props.firstColour}, ${props.secondColour})`
      : 'linear-gradient(to right, #36d1dc, #5b86e5)'};
`

export const Avatar = ({ url, size }: Props) => {
  let firstColour, secondColour

  if (url) {
    const n = hash(url)
    const c1 = color({ h: n % 360, s: 0.95, l: 0.5 })
    firstColour = c1.toHexString()
    secondColour = c1.triad()[1].toHexString()
  }
  return (
    <AvatarImage>
      {url ? (
        <img src={url} alt="avatar" style={{ height: `${size}px`, width: `${size}px` }} />
      ) : (
        <AvatarPlaceholder firstColour={firstColour} secondColour={secondColour} size={size} />
      )}
    </AvatarImage>
  )
}
