import React from 'react'
import { render } from '@testing-library/react'
import { MarketOverview } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`${MarketOverview.name}`, () => {
  test('Snapshot', () => {
    const component = render(<MarketOverview />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
