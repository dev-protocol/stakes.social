import React from 'react'
import BigNumber from 'bignumber.js'
import { message } from 'antd'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { allowance, balanceOf } from 'src/fixtures/_pages/liquidity/uniswap-pool/client'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { Deposit } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/_pages/liquidity/geyser/hooks.ts')
jest.mock('src/fixtures/_pages/liquidity/uniswap-pool/client.ts')
jest.mock('src/fixtures/_pages/liquidity/uniswap-pool/hooks.ts')
jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/wallet/utility')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('web3')

describe(`${Deposit.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Deposit geyserAddress="0xdummy" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
  test('react hooks: click MAX button', async () => {
    ;(balanceOf as jest.Mock).mockImplementation(() => Promise.resolve(new BigNumber('1000')))
    ;(allowance as jest.Mock).mockImplementation(() => Promise.resolve())
    ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: {} }))
    message.warn = jest.fn(() => {}) as any

    const { getByText } = render(<Deposit geyserAddress="0xdummy" />)

    await act(async () => {
      await userEvent.click(getByText('Max'))
    })

    expect((message.warn as jest.Mock).mock.calls.length).toBe(0)
  })
  test('react hooks: click MAX button with balance is zero', async () => {
    ;(balanceOf as jest.Mock).mockImplementation(() => Promise.resolve(new BigNumber('0')))
    ;(allowance as jest.Mock).mockImplementation(() => Promise.resolve())
    ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', ethersProvider: {} }))
    message.warn = jest.fn(() => {}) as any

    const { getByText } = render(<Deposit geyserAddress="0xdummy" />)

    await act(async () => {
      await userEvent.click(getByText('Max'))
    })

    expect((message.warn as jest.Mock).mock.calls.length).toBe(1)
  })
  test('react hooks: click MAX button with not sign in', async () => {
    ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: undefined }))
    message.warn = jest.fn(() => {}) as any

    const { getByText } = render(<Deposit geyserAddress="0xdummy" />)

    await act(async () => {
      await userEvent.click(getByText('Max'))
    })

    expect((message.warn as jest.Mock).mock.calls.length).toBe(1)
  })
})
