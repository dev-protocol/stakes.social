import React from 'react'
import { render } from '@testing-library/react'
import { StakeNow } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${StakeNow.name}`, () => {
  test('Snapshot', () => {
    const component = render(<StakeNow propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
