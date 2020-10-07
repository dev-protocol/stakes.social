import React from 'react'
import { render } from '@testing-library/react'
import { Banner } from '.'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${Banner.name}`, () => {
  test('Snapshot', () => {
    const component = render(<Banner />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
