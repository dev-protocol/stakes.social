import React from 'react'
import Web3 from 'web3'
import { render } from '@testing-library/react'
import { WithdrawWithEstimate } from './WithdrawWithEstimate'
import 'src/__mocks__/window/matchMedia.mock'
import WalletContext from 'src/context/walletContext'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('web3')
jest.mock('@dev/graphql')

describe(`${WithdrawWithEstimate.name}`, () => {
  test('Snapshot', () => {
    const component = render(
      <WalletContext.Provider value={{ web3: new Web3(), setProviders: () => {} }}>
        <WithdrawWithEstimate propertyAddress="propertyAddress" />
      </WalletContext.Provider>
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
