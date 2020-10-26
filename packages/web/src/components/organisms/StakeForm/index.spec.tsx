import React from 'react'
import { render } from '@testing-library/react'
import { StakeForm } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('@dev/graphql')

describe(`${StakeForm.name}`, () => {
  test('Snapshot', () => {
    const component = render(<StakeForm propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
