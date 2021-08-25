import React from 'react'
import { render } from '@testing-library/react'
import { AssetList } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'

jest.mock('src/fixtures/dev-for-apps/functions/useGetProperty')
jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/wallet/hooks')

describe(`${AssetList.name}`, () => {
  test('Snapshot', () => {
    ;(useGetProperty as jest.Mock).mockReturnValue(() => ({}))
    const { baseElement } = render(
      <AssetList properties={['1', '2', '3']} onPagination={() => {}} enableStake={true} total={6} />
    )
    expect(baseElement).toMatchSnapshot()
  })
  test('Snapshot with empty properties', () => {
    const { baseElement } = render(<AssetList properties={[]} onPagination={() => {}} enableStake={true} total={6} />)
    expect(baseElement).toMatchSnapshot()
  })
  test('Snapshot with empty properties and sign in button', () => {
    ;(useProvider as jest.Mock).mockReturnValue(() => ({ accountAddress: '' }))
    const component = render(<AssetList properties={[]} onPagination={() => {}} enableStake={true} total={6} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
