import React from 'react'
import { render } from '@testing-library/react'
import { LargeInput } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/pages/liquidity/fixtures/geyser/hooks.ts')
jest.mock('src/pages/liquidity/fixtures/uniswap-pool/hooks.ts')

describe(`${LargeInput.name}`, () => {
  test('Snapshot', () => {
    const component = render(<LargeInput></LargeInput>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
