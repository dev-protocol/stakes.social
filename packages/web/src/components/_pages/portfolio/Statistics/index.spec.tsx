import React from 'react'
import { render } from '@testing-library/react'
import { Statistics } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('@dev/graphql')

describe(`Statistics`, () => {
  test('Snapshot', () => {
    const component = render(<Statistics accountAddress="0xdummy" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
