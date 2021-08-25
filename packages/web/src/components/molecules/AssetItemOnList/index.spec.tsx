import React from 'react'
import { render } from '@testing-library/react'
import { AssetItemOnList } from '.'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/dev-for-apps/functions/useGetProperty')

describe(`${AssetItemOnList.name}`, () => {
  test('Snapshot', () => {
    ;(useGetProperty as jest.Mock).mockReturnValue(() => ({}))
    const component = render(<AssetItemOnList propertyAddress="property-address" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
