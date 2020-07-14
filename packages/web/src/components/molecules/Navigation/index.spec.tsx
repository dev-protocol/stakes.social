import React from 'react'
import { render } from '@testing-library/react'
import { Navigation } from './'
import 'src/__mocks__/window/matchMedia.mock'

describe(`${Navigation.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Navigation />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
