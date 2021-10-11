import React from 'react'
import { render } from '@testing-library/react'
import { Informations } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/_pages/liquidity/geyser/hooks.ts')
jest.mock('src/fixtures/_pages/liquidity/uniswap-pool/hooks.ts')

describe(`${Informations.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Informations geyserAddress="0xdummy" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
