import React from 'react'
import { render } from '@testing-library/react'
import { PropertyCardList } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/utility/gql-hooks-wrapper')
jest.mock('@dev/graphql')

describe(`${PropertyCardList.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PropertyCardList />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
