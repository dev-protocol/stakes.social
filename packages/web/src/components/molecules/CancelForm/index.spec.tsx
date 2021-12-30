import React from 'react'
import { render } from '@testing-library/react'
import { CancelForm } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`${CancelForm.name}`, () => {
  test('Snapshot', () => {
    const component = render(<CancelForm onClickCancel={() => {}} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
