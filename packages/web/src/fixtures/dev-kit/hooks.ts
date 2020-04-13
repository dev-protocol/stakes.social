import { newClient } from './client'
import { catchPath } from './cache-path'
import { addresses } from '@devprtcl/dev-kit-js'
import { UnwrapFunc, toNaturalNumber } from 'src/fixtures/utility'
import useSWR from 'swr'

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
    catchPath.getTotalRewards(propertyAddress),
    () => getRewardsAmount(propertyAddress)
  )
  return { totalRewardsAmount: data ? toNaturalNumber(data) : undefined, error }
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
    catchPath.getTotalStaking(propertyAddress),
    () => getTotalStakingAmount(propertyAddress)
  )
  return { totalStakingAmount: data ? toNaturalNumber(data) : undefined, error }
}
