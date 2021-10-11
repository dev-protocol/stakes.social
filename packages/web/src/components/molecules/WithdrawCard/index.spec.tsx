import React from 'react'
import { render } from '@testing-library/react'
import { WithdrawCard } from './'
import BigNumber from 'bignumber.js'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${WithdrawCard.name}`, () => {
  test('Snapshot', () => {
    const component = render(<WithdrawCard label="Holder" onSubmitWithdraw={() => {}} amount={new BigNumber(1000)} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
