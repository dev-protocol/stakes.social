import { useEffect, DependencyList } from 'react'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { SUPPORTED_CHAINS } from '../wallet/constants'

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
  const router = useRouter()
  const fromRouter = router?.query?.network
  const isRoot = useMemo(() => router?.pathname === '/', [router])
  const requestedChain = useMemo(
    () => SUPPORTED_CHAINS.find(x => x === fromRouter) ?? (isRoot ? 'ethereum' : undefined),
    [fromRouter, isRoot]
  )
  return { router, fromRouter, isRoot, requestedChain }
}
