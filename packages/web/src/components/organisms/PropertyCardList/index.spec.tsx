import React from 'react'
import { render } from '@testing-library/react'
import { PropertyCardList } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${PropertyCardList.name}`, () => {
  test.skip('Snapshot', () => {
    const component = render(<PropertyCardList currentPage={1} searchWord="" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
