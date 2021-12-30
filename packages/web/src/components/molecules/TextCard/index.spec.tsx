import React from 'react'
import { render } from '@testing-library/react'
import { TextCard } from '.'
import 'src/__mocks__/window/matchMedia.mock'

describe(`${TextCard.name}`, () => {
  test('Snapshot', () => {
    const component = render(
      <TextCard name="npm" description="description" authentication="authentication" calculation={1} />
    )
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
