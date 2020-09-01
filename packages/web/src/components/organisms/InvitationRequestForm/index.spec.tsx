import React from 'react'
import { render } from '@testing-library/react'
import { InvitationRequestForm } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import { useEffectAsync } from 'src/fixtures/utility'

jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-kit/hooks')

describe(`${InvitationRequestForm.name}`, () => {
  test('Snapshot', () => {
    ;(useEffectAsync as jest.Mock).mockImplementation(() => {})
    const component = render(<InvitationRequestForm market="market" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
