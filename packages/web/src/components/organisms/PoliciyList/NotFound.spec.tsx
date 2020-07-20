import React from 'react'
import { render } from '@testing-library/react'
import { NotFound } from './NotFound'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${NotFound.name}`, () => {
  test('Snapshot', () => {
    const component = render(<NotFound />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
