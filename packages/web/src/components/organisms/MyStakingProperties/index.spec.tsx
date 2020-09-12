import React from 'react'
import { render } from '@testing-library/react'
import { MyStakingProperties } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import { useGetAccountAddress, useBlockNumberStream, useGetBlock } from 'src/fixtures/wallet/hooks'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('@dev/graphql')

describe(`${MyStakingProperties.name}`, () => {
  test('Snapshot', () => {
    ;(useGetAccountAddress as jest.Mock).mockResolvedValue('0x01234567890')
    ;(useBlockNumberStream as jest.Mock).mockResolvedValue('15987')
    ;(useGetBlock as jest.Mock).mockResolvedValue('15987')
    const component = render(<MyStakingProperties />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
