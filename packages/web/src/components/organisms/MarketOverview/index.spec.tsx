import React from 'react'
import { render } from '@testing-library/react'
import { MarketOverview } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('@dev/graphql')
jest.mock('src/fixtures/github/hooks')

describe(`${MarketOverview.name}`, () => {
  test('Snapshot', () => {
    const component = render(<MarketOverview propertyAddress="0x0" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
