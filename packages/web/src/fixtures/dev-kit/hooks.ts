import { NewClient } from './client'
import { catchPath } from './cache-path'
import { addresses } from '@dev-protocol/dev-kit-js'
import { UnwrapFunc, toNaturalNumber } from 'src/fixtures/utility'
import useSWR from 'swr'

const getRewardsAmount = async (propertyAddress: string) => {
  const client = NewClient()
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
