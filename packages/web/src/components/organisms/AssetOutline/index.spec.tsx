import React from 'react'
import { render } from '@testing-library/react'
import { AssetOutline } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/devprtcl/hooks')

describe(`${AssetOutline.name}`, () => {
  test('Snapshot', () => {
    const component = render(<AssetOutline propertyAddress="property-address" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
