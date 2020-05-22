import React from 'react'
import { render } from '@testing-library/react'
import { H1, H2, H3, H4, Body1 } from '.'
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

  test('Snapshot H3', () => {
    const component = render(<H3>h3</H3>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })

  test('Snapshot H4', () => {
    const component = render(<H4>h4</H4>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })

  test('Snapshot Body1', () => {
    const component = render(<Body1>body1</Body1>)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
