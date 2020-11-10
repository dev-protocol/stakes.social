import React from 'react'
import Web3 from 'web3'
import { render } from '@testing-library/react'
import { StakeForm } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import WalletContext from 'src/context/walletContext'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('src/context/walletContext')
jest.mock('web3')
jest.mock('@dev/graphql')

describe(`${StakeForm.name}`, () => {
  test('Snapshot', () => {
    const component = render(
      <WalletContext.Provider value={{ web3: new Web3(), setWeb3: () => {} }}>
        <StakeForm propertyAddress="propertyAddress" />
      </WalletContext.Provider>
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
