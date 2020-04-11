import React from 'react'
import { render } from '@testing-library/react'
import { PropertyCard } from './'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${PropertyCard.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PropertyCard propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
