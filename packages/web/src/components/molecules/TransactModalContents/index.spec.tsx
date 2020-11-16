import React from 'react'
import { render } from '@testing-library/react'
import { TransactModalContents } from '.'
import Jdenticon from 'react-jdenticon'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('web3')
jest.mock('@dev/graphql')
jest.mock('react-jdenticon')

describe(`${TransactModalContents.name}`, () => {
  test('Snapshot', () => {
    ;(Jdenticon as jest.Mock).mockImplementation(() => <></>)
    const component = render(<TransactModalContents type="stake" propertyAddress="0x0" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
