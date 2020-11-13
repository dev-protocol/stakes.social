import React, { useEffect, useState } from 'react'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { Account } from 'src/fixtures/dev-for-apps/utility'
import { Avatar } from 'src/components/atoms/Avatar'

type Props = {
  accountAddress?: string
  size: string | number
}

export const AvatarUser = ({ accountAddress, size }: Props) => {
  const [account, setAccount] = useState<Account>()
  const { data: user } = useGetAccount(accountAddress)
  useEffect(() => {
    if (user) {
      setAccount(user)
    }
  }, [user])

  return <Avatar url={account?.portrait?.url} genkey={accountAddress} size={size}></Avatar>
}
