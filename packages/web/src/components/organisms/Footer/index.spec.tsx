import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${Footer.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Footer />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
