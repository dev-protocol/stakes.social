import React from 'react'
import { render } from '@testing-library/react'
import { AssetItemOnList } from '.'
import Jdenticon from 'react-jdenticon'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('react-jdenticon')
jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/dev-for-apps/hooks')

describe(`${AssetItemOnList.name}`, () => {
  test('Snapshot', () => {
    ;(Jdenticon as jest.Mock).mockImplementation(() => <></>)
    const component = render(<AssetItemOnList propertyAddress="property-address" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
