import React from 'react'
import Jdenticon from 'react-jdenticon'
import { render } from '@testing-library/react'
import { UserProfile } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-for-apps/hooks')
jest.mock('react-jdenticon')

describe(`${UserProfile.name}`, () => {
  test('Snapshot', () => {
    ;(Jdenticon as jest.Mock).mockImplementation(() => <></>)
    const component = render(<UserProfile />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
