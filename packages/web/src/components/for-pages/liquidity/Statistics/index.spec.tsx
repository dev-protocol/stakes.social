import React from 'react'
import { render } from '@testing-library/react'
import { Statistics } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/pages/liquidity/fixtures/geyser/hooks.ts')
jest.mock('src/pages/liquidity/fixtures/uniswap-pool/hooks.ts')

describe(`${Statistics.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Statistics></Statistics>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
