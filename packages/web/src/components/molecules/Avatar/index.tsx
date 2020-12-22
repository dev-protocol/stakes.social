import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { Account } from 'src/fixtures/dev-for-apps/utility'
import hash from 'string-hash'
import color from 'tinycolor2'

interface Props {
  accountAddress?: string
  size: string
}

const AvatarImage = styled.div`
  img {
    border: 1px solid lightgrey;
    border-radius: 90px;
    object-fit: cover;
    object-position: center;
  }
`

export const AvatarPlaceholder = styled.div<{ size: string; firstColour?: string; secondColour?: string }>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 90px;
  background-image: ${props =>
    props.firstColour && props.secondColour
      ? `linear-gradient(to right, ${props.firstColour}, ${props.secondColour})`
      : 'linear-gradient(to right, #36d1dc, #5b86e5)'};
`

export const Avatar = ({ accountAddress, size }: Props) => {
  const [account, setAccount] = useState<Account>()
  const { data: user } = useGetAccount(accountAddress || '')
  let firstColour, secondColour

  if (accountAddress) {
    const n = hash(accountAddress)
    const c1 = color({ h: n % 360, s: 0.95, l: 0.5 })
    firstColour = c1.toHexString()
    secondColour = c1.triad()[1].toHexString()
  }

  useEffect(() => {
    if (user) {
      setAccount(user)
    }
  }, [user])

  return (
    <AvatarImage>
      {account?.portrait ? (
        <img src={account?.portrait.url} alt="avatar" style={{ height: `${size}px`, width: `${size}px` }} />
      ) : (
        <AvatarPlaceholder firstColour={firstColour} secondColour={secondColour} size={size} />
      )}
    </AvatarImage>
  )
}
