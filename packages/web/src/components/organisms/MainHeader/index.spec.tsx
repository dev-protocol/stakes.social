import React from 'react'
import { render } from '@testing-library/react'
import { MainHeader } from '.'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${MainHeader.name}`, () => {
  test('Snapshot', () => {
    const component = render(<MainHeader />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
