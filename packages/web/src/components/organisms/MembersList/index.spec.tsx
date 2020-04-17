import React from 'react'
import { render } from '@testing-library/react'
import { MembersList } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${MembersList.name}`, () => {
  test('Snapshot', () => {
    const component = render(<MembersList membersList={[{ propertyAddress: 'property-address', percentage: 28 }]} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
