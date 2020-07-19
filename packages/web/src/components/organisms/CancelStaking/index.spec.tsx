import React from 'react'
import { render } from '@testing-library/react'
import { CancelStaking } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${CancelStaking.name}`, () => {
  test('Snapshot', () => {
    const component = render(<CancelStaking propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
