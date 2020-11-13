import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Jdenticon from 'react-jdenticon'
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
        <Jdenticon value={accountAddress || ''} size={size} />
      )}
    </AvatarImage>
  )
}
