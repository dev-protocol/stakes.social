import React from 'react'
import { render } from '@testing-library/react'
import { AuthenticateForm } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`${AuthenticateForm.name}`, () => {
  test('Snapshot', () => {
    const component = render(<AuthenticateForm marketAddress="market-address" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
