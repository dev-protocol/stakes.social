import React from 'react'
import { render } from '@testing-library/react'
import { PropertyTags } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-for-apps/hooks')

describe(`${PropertyTags.name}`, () => {
  test('Snapshot', () => {
    const component = render(<PropertyTags />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
