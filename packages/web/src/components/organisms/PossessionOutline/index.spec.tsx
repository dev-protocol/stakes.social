import React from 'react'
import { render } from '@testing-library/react'
import { PossessionOutline } from '.'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${PossessionOutline.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PossessionOutline propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
