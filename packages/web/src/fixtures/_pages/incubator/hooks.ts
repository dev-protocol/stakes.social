import { useCallback, useState } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { waitForCreateMetrics } from 'src/fixtures/dev-kit/client'
import { toNaturalNumber, UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import { authenticate, getPropertyAddress, getReward, intermediateProcess, waitForFinishEvent } from './client'
import { useCurrency } from 'src/fixtures/currency/hooks'
import useSWR from 'swr'
import { SWRCachePath } from './cache-path'
import { message } from 'antd'

export const useAuthenticate = () => {
  const { web3 } = useProvider()
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
      return whenDefined(web3, x => {
        getPropertyAddress(x, githubRepository)
          .then(propertyAddress => {
            waitForCreateMetrics(x, propertyAddress).catch(setWaitError)
          })
          .finally(() => setIsWaiting(false))
      })
    },
    [web3]
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
    async (githubRepository: string, address: string, twitterStatusId: string, twitterPublicSignature: string) => {
      setIsWaiting(true)
      return whenDefined(web3, x =>
        intermediateProcess(x, githubRepository, address, twitterStatusId, twitterPublicSignature)
          .catch(setError)
          .finally(() => setIsWaiting(false))
      )
    },
    [web3]
  )
  const waitCallback = useCallback(
    async (githubPublicSignature: string) => {
      setIsWaiting(true)
      return whenDefined(web3, x =>
        waitForFinishEvent(x, githubPublicSignature)
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
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getReward> | undefined, Error>(
    SWRCachePath.getReward(githubRepository),
    () => whenDefined(nonConnectedWeb3, client => getReward(client, githubRepository))
  )

  return { reward: whenDefined(data, x => toCurrency(toNaturalNumber(x))), currency, error }
}
