import React from 'react'
import { render } from '@testing-library/react'
import { PropertyCoverImage } from '.'

describe(`${PropertyCoverImage.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PropertyCoverImage propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
