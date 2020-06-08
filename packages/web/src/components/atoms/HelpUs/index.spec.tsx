import React from 'react'
import { render } from '@testing-library/react'
import { HelpUs } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`HelpUs`, () => {
  test('Snapshot HelpUs', () => {
    const component = render(<HelpUs></HelpUs>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
