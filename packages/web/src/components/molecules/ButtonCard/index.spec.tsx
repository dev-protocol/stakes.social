import React from 'react'
import { render } from '@testing-library/react'
import { ButtonCard } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`${ButtonCard.name}`, () => {
  test('Snapshot', () => {
    const component = render(<ButtonCard label="Cancel Staking" onClick={() => {}} buttonLabel="Cancel" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
