import React from 'react'
import { render } from '@testing-library/react'
import { WithdrawStakingCard } from './'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${WithdrawStakingCard.name}`, () => {
  test('Snapshot', () => {
    const component = render(<WithdrawStakingCard propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
