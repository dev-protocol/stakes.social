import React from 'react'
import { render } from '@testing-library/react'
import { AssetList } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import { useProvider } from 'src/fixtures/wallet/hooks'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/dev-for-apps/hooks')
jest.mock('src/fixtures/wallet/hooks')

describe(`${AssetList.name}`, () => {
  test('Snapshot', () => {
    const component = render(
      <AssetList properties={['1', '2', '3']} onPagination={() => {}} enableStake={true} total={6} />
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
  test('Snapshot with empty properties', () => {
    const component = render(<AssetList properties={[]} onPagination={() => {}} enableStake={true} total={6} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
  test('Snapshot with empty properties and sign in button', () => {
    ;(useProvider as jest.Mock).mockReturnValue(() => ({ accountAddress: '' }))
    const component = render(<AssetList properties={[]} onPagination={() => {}} enableStake={true} total={6} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
