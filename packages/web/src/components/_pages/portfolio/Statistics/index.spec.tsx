import React from 'react'
import { render } from '@testing-library/react'
import { Statistics } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`Statistics`, () => {
  test('Snapshot', () => {
    const component = render(<Statistics />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
