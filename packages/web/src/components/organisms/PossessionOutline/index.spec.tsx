import React from 'react'
import { render } from '@testing-library/react'
import { PossessionOutline } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/utility/gql-hooks-wrapper')

describe(`${PossessionOutline.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PossessionOutline propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
