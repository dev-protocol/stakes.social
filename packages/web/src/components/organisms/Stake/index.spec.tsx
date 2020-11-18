import React from 'react'
import Web3 from 'web3'
import { render } from '@testing-library/react'
import { Stake } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import WalletContext from 'src/context/walletContext'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('web3')
jest.mock('@dev/graphql')

describe(`${Stake.name}`, () => {
  test('Snapshot', () => {
    const component = render(
      <WalletContext.Provider value={{ web3: new Web3(), setWeb3: () => {} }}>
        <Stake propertyAddress="propertyAddress" />
      </WalletContext.Provider>
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
