import React from 'react'
import { render } from '@testing-library/react'
import { Countdown } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/_pages/liquidity/geyser/hooks.ts')
jest.mock('src/fixtures/_pages/liquidity/uniswap-pool/hooks.ts')

describe(`${Countdown.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Countdown endAtSec={1234567}></Countdown>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
