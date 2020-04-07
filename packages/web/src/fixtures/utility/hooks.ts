import { useEffect, DependencyList } from 'react'

export function useEffectAsync(effect: () => void, deps?: DependencyList): void {
  useEffect(() => {
    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UnwrapFunc<T> = T extends (...arg: any) => Promise<infer U> ? U : T
