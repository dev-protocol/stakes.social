import React from 'react'
import { render } from '@testing-library/react'
import { ConnectedApps } from '.'

describe(`${ConnectedApps.name}`, () => {
  test('Snapshot', () => {
    const component = render(<ConnectedApps />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
