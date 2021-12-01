import React from 'react'
import { render } from '@testing-library/react'
import { TransactModalContents } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-for-apps/hooks')
jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('ethers')
jest.mock('web3')
jest.mock('@dev/graphql')

describe(`${TransactModalContents.name}`, () => {
  test('Snapshot', () => {
    const component = render(<TransactModalContents type="stake" propertyAddress="0x0" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
