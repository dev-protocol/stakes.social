import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${Header.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Header />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
