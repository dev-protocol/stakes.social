import React, { SVGProps } from 'react'
import { StakesSocial } from '../Svgs/tsx'
import { A } from '../A'
import styled from 'styled-components'

const link = A({ href: '/' })

const Wrap = styled.span`
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5em;
  & > svg {
    width: 2em;
  }
`

const Text = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`

export const BrandLogo = (props: SVGProps<SVGSVGElement> = {}) => {
  return link(
    <Wrap>
      <StakesSocial id="headerlogo" height={undefined} {...props} />
      <Text>Stakes.social</Text>
    </Wrap>
  )
}
