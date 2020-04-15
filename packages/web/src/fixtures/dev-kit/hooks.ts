import { newClient } from './client'
import { SWRCachePath } from './cache-path'
import { addresses } from '@devprtcl/dev-kit-js'
import { UnwrapFunc, toNaturalNumber } from 'src/fixtures/utility'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import useSWR from 'swr'
import { message } from 'antd'
import { useState } from 'react'

const getRewardsAmount = async (propertyAddress: string) => {
  const client = newClient()
  if (client) {
    return client
      .withdraw(await client.registry(addresses.eth.main.registry).withdraw())
      .getRewardsAmount(propertyAddress)
  }
  return undefined
}

export const useGetTotalRewardsAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getRewardsAmount>, Error>(
    SWRCachePath.getTotalRewardsAmount(propertyAddress),
    () => getRewardsAmount(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  return { totalRewardsAmount: data ? toNaturalNumber(data) : undefined, error }
}

export const useWithdrawHolderReward = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  const withdraw = async (propertyAddress: string) => {
    setIsLoading(true)
    setError(undefined)
    try {
      const client = newClient()
      if (!client) throw new Error(`No wallet`)
      await client.withdraw(await client.registry(addresses.eth.main.registry).withdraw()).withdraw(propertyAddress)
      setIsLoading(false)
    } catch (err) {
      setError(err)
      message.error(err.message)
      setIsLoading(false)
    }
  }

  return { withdraw, isLoading, error }
}

const getTotalStakingAmount = async (proepertyAddress: string) => {
  const client = newClient()
  if (client) {
    return client.lockup(await client.registry(addresses.eth.main.registry).lockup()).getPropertyValue(proepertyAddress)
  }
  return undefined
}

export const useGetTotalStakingAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getTotalStakingAmount>, Error>(
    SWRCachePath.getTotalStakingAmount(propertyAddress),
    () => getTotalStakingAmount(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  return { totalStakingAmount: data ? toNaturalNumber(data) : undefined, error }
}

const getMyStakingAmount = async (propertyAddress: string) => {
  const client = newClient()
  const accountAddress = getAccountAddress()
  if (client && accountAddress) {
    return client
      .lockup(await client.registry(addresses.eth.main.registry).lockup())
      .getValue(propertyAddress, accountAddress)
  }
  return undefined
}

export const useGetMyStakingAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getMyStakingAmount>, Error>(
    SWRCachePath.getMyStakingAmount(propertyAddress),
    () => getMyStakingAmount(propertyAddress),
    {
      onError: err => message.error(err.message)
    }
  )

  return { myStakingAmount: data ? toNaturalNumber(data) : undefined, error }
}
