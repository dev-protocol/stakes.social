import React from 'react'
import { render } from '@testing-library/react'
import { PropertyHeader } from '.'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${PropertyHeader.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PropertyHeader propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
