import { useCallback, useState } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { waitForCreateMetrics } from 'src/fixtures/dev-kit/client'
import { toBigNumber, toNaturalNumber, UnwrapFunc, whenDefined, whenDefinedAll } from 'src/fixtures/utility'
import {
  authenticate,
  getPropertyAddress,
  getReward,
  intermediateProcess,
  isFinished,
  waitForFinishEvent
} from './client'
import { useCurrency } from 'src/fixtures/currency/hooks'
import useSWR from 'swr'
import { SWRCachePath } from './cache-path'
import { useGetIncubators } from 'src/fixtures/dev-for-apps/hooks'

export const useAuthenticate = () => {
  const { web3, ethersProvider } = useProvider()
  const [authenticateError, setAuthenticateError] = useState<Error>()
  const [waitError, setWaitError] = useState<Error>()
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const callback = useCallback(
    async (githubRepository: string, publicSignature: string) => {
      return whenDefined(web3, x => authenticate(x, githubRepository, publicSignature).catch(setAuthenticateError))
    },
    [web3]
  )
  const waitCallback = useCallback(
    async (githubRepository: string) => {
      setIsWaiting(true)
      return whenDefinedAll([ethersProvider, web3], ([eth, w3]) =>
        getPropertyAddress(w3, githubRepository)
          .then(propertyAddress => waitForCreateMetrics(eth, w3, propertyAddress))
          .catch(setWaitError)
          .finally(() => setIsWaiting(false))
      )
    },
    [web3, ethersProvider]
  )
  return {
    authenticate: callback,
    waitForCreateMetrics: waitCallback,
    isWaiting,
    error: waitError || authenticateError
  }
}

export const useIntermediateProcess = () => {
  const { web3 } = useProvider()
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const [waitError, setWaitError] = useState<Error>()
  const callback = useCallback(
    async (githubRepository: string, address: string, twitterStatusUrl: string, twitterPublicSignature: string) => {
      setIsWaiting(true)
      return whenDefined(web3, x =>
        intermediateProcess(x, githubRepository, address, twitterStatusUrl, twitterPublicSignature)
          .catch(setError)
          .finally(() => setIsWaiting(false))
      )
    },
    [web3]
  )
  const waitCallback = useCallback(
    async (propertyAddress: string) => {
      setIsWaiting(true)
      return whenDefined(web3, x =>
        waitForFinishEvent(x, propertyAddress)
          .catch(setWaitError)
          .finally(() => setIsWaiting(false))
      )
    },
    [web3]
  )
  return { intermediateProcess: callback, waitForFinishEvent: waitCallback, isWaiting, error: waitError || error }
}

export const useGetReward = (githubRepository: string) => {
  const { nonConnectedWeb3 } = useProvider()
  const { currency, toCurrency, devToUSD } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getReward> | undefined, Error>(
    SWRCachePath.getReward(githubRepository),
    () => whenDefined(nonConnectedWeb3, client => getReward(client, githubRepository))
  )

  const inDEV = whenDefined(data, x => toNaturalNumber(x))
  const inUSD = whenDefined(inDEV, x => devToUSD(x))
  const reward = whenDefined(inDEV, x => toCurrency(x))
  return { reward, currency, error, inDEV, inUSD }
}

export const useGetEntireRewards = () => {
  const { data: incubators } = useGetIncubators()
  const { currency, toCurrency, devToUSD } = useCurrency()
  const { nonConnectedWeb3 } = useProvider()
  const { data: rewards, error } = useSWR<string[] | undefined, Error>(SWRCachePath.getEntireRewards(incubators), () =>
    whenDefinedAll([nonConnectedWeb3, incubators], ([client, items]) =>
      Promise.all(items.map(item => getReward(client, item.verifier_id)))
    )
  )
  const inDEV = whenDefined(rewards, x => toNaturalNumber(x.map(toBigNumber).reduce((i, p) => i.plus(p))))
  const inUSD = whenDefined(inDEV, x => devToUSD(x))
  const reward = whenDefined(inDEV, x => toCurrency(x))
  return { reward, currency, error, inDEV, inUSD }
}

export const useIsFinished = (propertyAddress?: string) => {
  const { web3, accountAddress } = useProvider()
  return useSWR<UnwrapFunc<typeof isFinished> | undefined, Error>(
    SWRCachePath.isFinished(propertyAddress, accountAddress),
    () => whenDefinedAll([web3, propertyAddress], ([client, property]) => isFinished(client, property))
  )
}
