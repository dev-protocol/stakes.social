import React from 'react'
import { render } from '@testing-library/react'
import { TransactionForm } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('@dev/graphql')

describe(`${TransactionForm.name}`, () => {
  test('Snapshot', () => {
    const component = render(<TransactionForm propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
