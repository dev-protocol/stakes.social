import React from 'react'
import { render } from '@testing-library/react'
import { SupplySummaly } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import BigNumber from 'bignumber.js'

describe(`${SupplySummaly.name}`, () => {
  test('Snapshot', () => {
    const component = render(<SupplySummaly apy={new BigNumber(1)} annualSupplyGrowthRatio={new BigNumber(1)} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
