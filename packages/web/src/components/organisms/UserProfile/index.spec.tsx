import React from 'react'
import { render } from '@testing-library/react'
import { UserProfile } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-for-apps/hooks')

describe(`${UserProfile.name}`, () => {
  test('Snapshot', () => {
    const component = render(<UserProfile />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
