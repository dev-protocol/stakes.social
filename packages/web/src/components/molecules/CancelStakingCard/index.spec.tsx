import React from 'react'
import { render } from '@testing-library/react'
import { CancelStakingCard } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`${CancelStakingCard.name}`, () => {
  test('Snapshot', () => {
    const component = render(<CancelStakingCard onClickCancel={() => {}} onClickWithdraw={() => {}} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
