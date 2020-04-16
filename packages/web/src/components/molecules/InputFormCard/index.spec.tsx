import React from 'react'
import { render } from '@testing-library/react'
import { InputFormCard } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')

describe(`${InputFormCard.name}`, () => {
  test('Snapshot', () => {
    const component = render(<InputFormCard label="Holder" onSubmitStake={() => {}} suffix="DEV" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
