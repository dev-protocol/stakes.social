import React from 'react'
import { render } from '@testing-library/react'
import { PropertyHeader } from '.'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/devprtcl/hooks')
jest.mock('src/fixtures/wallet/hooks')

describe(`${PropertyHeader.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PropertyHeader propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
