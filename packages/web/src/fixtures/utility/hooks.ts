import { useEffect, DependencyList } from 'react'
import { useRouter } from 'next/router'

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
