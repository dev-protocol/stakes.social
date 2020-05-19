import React from 'react'
import { render } from '@testing-library/react'
import { AuthHeader } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${AuthHeader.name}`, () => {
  test('Snapshot', () => {
    const component = render(<AuthHeader />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
