/* eslint-disable no-redeclare */
import { cond, isNil, always, T, complement } from 'ramda'

type UndefinedOr<R> = undefined | R

export const isNotNil = <T>(t: T): t is NonNullable<T> => complement(isNil)(t)

const passAll = <D>(depends: D) => (depends instanceof Array ? depends.every(isNotNil) : isNotNil(depends))

export const whenDefined = <D, F>(depends: D, fn: (d: NonNullable<D>) => F): UndefinedOr<F> =>
  cond([
    [isNil, always(undefined)],
    [T, deps => fn(deps as NonNullable<D>)]
  ])(depends)

export function whenDefinedAll<D1, F>(depends: [D1], fn: (d: [NonNullable<D1>]) => F): UndefinedOr<F>
export function whenDefinedAll<D1, D2, F>(
  depends: [D1, D2],
  fn: (d: [NonNullable<D1>, NonNullable<D2>]) => F
): UndefinedOr<F>
export function whenDefinedAll<D1, D2, D3, F>(
  depends: [D1, D2, D3],
  fn: (d: [NonNullable<D1>, NonNullable<D2>, NonNullable<D3>]) => F
): UndefinedOr<F>
export function whenDefinedAll<D1, D2, D3, D4, F>(
  depends: [D1, D2, D3, D4],
  fn: (d: [NonNullable<D1>, NonNullable<D2>, NonNullable<D3>, NonNullable<D4>]) => F
): UndefinedOr<F>
export function whenDefinedAll<D1, D2, D3, D4, D5, F>(
  depends: [D1, D2, D3, D4, D5],
  fn: (d: [NonNullable<D1>, NonNullable<D2>, NonNullable<D3>, NonNullable<D4>, NonNullable<D5>]) => F
): UndefinedOr<F>
export function whenDefinedAll<D1, D2, D3, D4, D5, D6, F>(
  depends: [D1, D2, D3, D4, D5, D6],
  fn: (d: [NonNullable<D1>, NonNullable<D2>, NonNullable<D3>, NonNullable<D4>, NonNullable<D5>, NonNullable<D6>]) => F
): UndefinedOr<F>
export function whenDefinedAll(depends: any, fn: any): any {
  return whenDefined(
    depends,
    cond([
      [passAll, deps => fn(deps)],
      [T, always(undefined)]
    ])
  )
}
