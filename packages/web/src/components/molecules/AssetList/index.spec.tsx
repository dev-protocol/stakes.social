import React from 'react'
import { render } from '@testing-library/react'
import { AssetList } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/dev-for-apps/hooks')

describe(`${AssetList.name}`, () => {
  test('Snapshot', () => {
    const component = render(
      <AssetList properties={['1', '2', '3']} onPagination={() => {}} enableStake={true} total={6} />
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
