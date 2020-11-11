import React from 'react'
import { render } from '@testing-library/react'
import { WithdrawForm } from './'
import BigNumber from 'bignumber.js'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('src/fixtures/currency/hooks')

describe(`${WithdrawForm.name}`, () => {
  test('Snapshot', () => {
    const component = render(<WithdrawForm label="Creators" onSubmitWithdraw={() => {}} amount={new BigNumber(1000)} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
