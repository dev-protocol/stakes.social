import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { Account } from 'src/fixtures/dev-for-apps/utility'

interface Props {
  accountAddress?: string
  size: string
}

const AvatarImage = styled.div`
  img {
    border-radius: 90px;
  }
`

export const AvatarPlaceholder = styled.div<{ size: string }>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 90px;
  background-image: linear-gradient(to right, #36d1dc, #5b86e5);
`

export const Avatar = ({ accountAddress, size }: Props) => {
  const [account, setAccount] = useState<Account>()
  const { data: user } = useGetAccount(accountAddress || '')
  useEffect(() => {
    if (user) {
      setAccount(user)
    }
  }, [user])

  return (
    <AvatarImage>
      {account?.portrait ? (
        <img src={account?.portrait.url} alt="avatar" style={{ width: `${size}px` }} />
      ) : (
        <AvatarPlaceholder size={size} />
      )}
    </AvatarImage>
  )
}
