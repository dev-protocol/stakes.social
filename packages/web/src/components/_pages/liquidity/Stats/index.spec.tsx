// import React from 'react'
// import { render } from '@testing-library/react'
import { Stats } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/_pages/liquidity/geyser/hooks.ts')
jest.mock('src/fixtures/_pages/liquidity/uniswap-pool/hooks.ts')

describe(`${Stats.name}`, () => {
  test('Snapshot', () => {
    // const component = render(<Stats geyserAddress="0xdummy" />)
    // const tree = component.baseElement
    // expect(tree).toMatchSnapshot()
  })
})
