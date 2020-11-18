import React from 'react'
import { render } from '@testing-library/react'
import { AssetList } from '.'
import Jdenticon from 'react-jdenticon'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('react-jdenticon')
jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/dev-for-apps/hooks')

describe(`${AssetList.name}`, () => {
  test('Snapshot', () => {
    ;(Jdenticon as jest.Mock).mockImplementation(() => <></>)
    const component = render(
      <AssetList properties={['1', '2', '3']} onPagination={() => {}} enableStake={true} enableWithdraw={true} />
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
