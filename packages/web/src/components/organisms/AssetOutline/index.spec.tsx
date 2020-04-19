import React from 'react'
import { render } from '@testing-library/react'
import { AssetOutline } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${AssetOutline.name}`, () => {
  test('Snapshot', () => {
    const component = render(<AssetOutline metricsAddress="metrics-address" marketAddress="market-address" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
