import React from 'react'
import { render } from '@testing-library/react'
import { H1, H2 } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`Title`, () => {
  test('Snapshot H1', () => {
    const component = render(<H1>h1</H1>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })

  test('Snapshot H2', () => {
    const component = render(<H2>h2</H2>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
