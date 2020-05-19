import React from 'react'
import { render } from '@testing-library/react'
import { AuthenticatePropertySelectForm } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('src/fixtures/utility/gql-hooks-wrapper')
jest.mock('@dev/graphql')

describe(`${AuthenticatePropertySelectForm.name}`, () => {
  test('Snapshot', () => {
    const component = render(<AuthenticatePropertySelectForm market="npm" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
