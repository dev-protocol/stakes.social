import { cond, isNil, always, T } from 'ramda'

export const whenDefined = <D, F>(depends: D, fn: (d: NonNullable<D>) => F): undefined | F =>
  cond([
    [isNil, always(undefined)],
    [T, deps => fn(deps as NonNullable<D>)]
  ])(depends)
