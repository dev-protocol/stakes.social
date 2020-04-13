import React from 'react'
import { render } from '@testing-library/react'
import { TotalStakingAmount } from './'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${TotalStakingAmount.name}`, () => {
  test('Snapshot', () => {
    const component = render(<TotalStakingAmount propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
