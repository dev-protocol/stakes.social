import React from 'react'
import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { message } from 'antd'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Stake } from '.'
import { balanceOf } from 'src/fixtures/dev-kit/client'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { whenDefined } from 'src/fixtures/utility'
import 'src/__mocks__/window/matchMedia.mock'
import WalletContext from 'src/context/walletContext'
import { getContractAddress } from 'src/fixtures/dev-kit/get-contract-address'

jest.mock('src/fixtures/dev-kit/client')
jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/dev-kit/get-contract-address')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('web3')
jest.mock('@dev/graphql')

describe(`${Stake.name}`, () => {
  test('Snapshot', () => {
    const component = render(
      <WalletContext.Provider value={{ web3: new Web3(), setProviders: () => {} }}>
        <Stake propertyAddress="propertyAddress" />
      </WalletContext.Provider>
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })

  test('Snapshot with title', () => {
    const component = render(
      <WalletContext.Provider value={{ web3: new Web3(), setProviders: () => {} }}>
        <Stake propertyAddress="propertyAddress" title="Stake" />
      </WalletContext.Provider>
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })

  test('react hooks: input amount click DEV button and click stake button', async () => {
    ;(balanceOf as jest.Mock).mockImplementation(() => Promise.resolve(new BigNumber('1000000')))
    ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', ethersProvider: {} }))
    ;(getContractAddress as jest.Mock).mockImplementation(() => Promise.resolve('0x0'))
    message.warn = jest.fn(() => {}) as any

    const { container, getByText } = render(
      <WalletContext.Provider value={{ web3: new Web3(), setProviders: () => {} }}>
        <Stake propertyAddress="propertyAddress" />
      </WalletContext.Provider>
    )

    const input = container.querySelector('input#stake')
    expect(input).not.toBe(null)
    await act(async () => {
      await whenDefined(input, x => userEvent.type(x, '12'))
      await userEvent.click(getByText('DEV'))
      await userEvent.click(getByText('Approve'))
    })

    expect((message.warn as jest.Mock).mock.calls.length).toBe(0)
  })

  // TODO(@k3nt0w)
  // test('react hooks: click DEV button(amount is zero) and click stake button', async () => {
  //   ;(balanceOf as jest.Mock).mockImplementation(() => Promise.resolve(new BigNumber('')))
  //   ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', ethersProvider: {} }))
  //   message.warn = jest.fn(() => {}) as any

  //   const { container, getByText } = render(
  //     <WalletContext.Provider value={{ web3: new Web3(), setProviders: () => {} }}>
  //       <Stake propertyAddress="propertyAddress" />
  //     </WalletContext.Provider>
  //   )

  //   const input = container.querySelector('input#stake')
  //   expect(input).not.toBe(null)
  //   await act(async () => {
  //     await userEvent.click(getByText('DEV'))
  //     await userEvent.click(getByText('Stake'))
  //   })

  //   expect((message.warn as jest.Mock).mock.calls.length).toBe(1)
  // })
})
