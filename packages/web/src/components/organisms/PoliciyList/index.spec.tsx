import React from 'react'
import { render } from '@testing-library/react'
import { PoliciesList } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${PoliciesList.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PoliciesList />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
