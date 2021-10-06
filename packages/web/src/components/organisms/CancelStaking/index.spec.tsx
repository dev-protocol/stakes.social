import React from 'react'
import { message } from 'antd'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { CancelStaking } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/client')
jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('@dev/graphql')

describe(`${CancelStaking.name}`, () => {
  test('Snapshot', () => {
    const component = render(<CancelStaking propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
  test('cancel staking handler', async () => {
    ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', ethersProvider: {} }))
    ;(getMyStakingAmount as jest.Mock).mockImplementation(() => Promise.resolve('10'))
    const { getByText } = render(<CancelStaking propertyAddress="propertyAddress" />)
    message.error = jest.fn(() => {}) as any

    await act(async () => {
      await userEvent.click(getByText('Cancel'))
    })

    expect((message.error as jest.Mock).mock.calls.length).toBe(0)
  })
  test('cancel staking handler with amount is undefined', async () => {
    ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', ethersProvider: {} }))
    ;(getMyStakingAmount as jest.Mock).mockImplementation(() => Promise.resolve())
    const { getByText } = render(<CancelStaking propertyAddress="propertyAddress" />)
    message.error = jest.fn(() => {}) as any

    await act(async () => {
      await userEvent.click(getByText('Cancel'))
    })

    expect((message.error as jest.Mock).mock.calls.length).toBe(1)
  })
})
