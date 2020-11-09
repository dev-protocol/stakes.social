import React from 'react'
import { render } from '@testing-library/react'
import { Max } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/_pages/liquidity/geyser/hooks.ts')
jest.mock('src/fixtures/_pages/liquidity/uniswap-pool/hooks.ts')

describe(`${Max.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Max onClick={() => {}}></Max>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
