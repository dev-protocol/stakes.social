import { useEffect, DependencyList, useState } from 'react'
import { useRouter } from 'next/router'
import { SUPPORTED_CHAINS } from '../wallet/constants'
import { UndefinedOr } from '@devprotocol/util-ts'
import { ChainName } from '../wallet/utility'

export function useEffectAsync(effect: () => void, deps?: DependencyList): void {
  useEffect(() => {
    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export type UnwrapFunc<T> = T extends (...arg: any) => Promise<infer U> ? U : T

const DEFAULT = 'ethereum'

export const useLinkWithNetwork = () => {
  const router = useRouter()
  const chainFromRouter = router?.query?.network
  const withNetwork = (path?: string) => `/${chainFromRouter ?? DEFAULT}${path}`
  return { withNetwork }
}

export const useNetworkInRouter = () => {
  const [state, setState] = useState<{ fromRouter?: string; isRoot: boolean; requestedChain: UndefinedOr<ChainName> }>()
  const { pathname, network: fromRouter } = useCachedRouter()
  useEffect(() => {
    const isRoot = pathname === '/'
    const requestedChain = SUPPORTED_CHAINS.find(x => x === fromRouter) ?? (isRoot ? 'ethereum' : undefined)
    setState({ fromRouter, isRoot, requestedChain })
  }, [pathname, fromRouter])

  return { ...state }
}

export const useCachedRouter = () => {
  const router = useRouter()
  const [state, setRouter] = useState<{
    pathname?: string
    network?: string
  }>()
  const pathname = router.pathname
  const network = router.query?.network as string
  useEffect(() => {
    if (pathname.startsWith('/[network]') && !network) {
      return
    }
    const next = { pathname, network }
    setRouter(next)
  }, [pathname, network])

  useEffect(() => {
    console.log('pathname updated: ', pathname)
  }, [pathname])

  useEffect(() => {
    console.log('network updated: ', network)
  }, [network])

  useEffect(() => {
    console.log('router updated')
  }, [router])

  return { ...state }
}
