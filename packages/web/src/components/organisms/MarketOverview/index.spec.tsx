import React from 'react'
import { render } from '@testing-library/react'
import { MarketOverview } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${MarketOverview.name}`, () => {
  test('Snapshot', () => {
    const component = render(<MarketOverview />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
