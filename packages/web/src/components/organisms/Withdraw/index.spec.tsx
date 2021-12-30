import React from 'react'
import { message } from 'antd'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { Withdraw } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import WalletContext from 'src/context/walletContext'
import { ethers } from 'ethers'

jest.mock('src/fixtures/dev-kit/client')
jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/uniswap/hooks')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('@dev/graphql')

describe(`${Withdraw.name}`, () => {
  test('Snapshot', () => {
    const component = render(
      <WalletContext.Provider value={{ ethersProvider: ethers.getDefaultProvider(), setProviders: () => {} }}>
        <Withdraw propertyAddress="propertyAddress" />
      </WalletContext.Provider>
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
  test('hooks: click MAX button and withdraw button', () => {
    ;(getMyStakingAmount as jest.Mock).mockImplementation(() => Promise.resolve({ amount: 1000 }))
    message.warn = jest.fn(() => {}) as any

    const { getByText } = render(
      <WalletContext.Provider value={{ ethersProvider: ethers.getDefaultProvider(), setProviders: () => {} }}>
        <Withdraw propertyAddress="propertyAddress" />
      </WalletContext.Provider>
    )

    act(() => {
      userEvent.click(getByText('DEV'))
      userEvent.click(getByText('Withdraw'))
    })

    // expect((message.warn as jest.Mock).mock.calls.length).toBe(0)
    expect((getMyStakingAmount as jest.Mock).mock.calls.length).toBe(1)
  })
})
