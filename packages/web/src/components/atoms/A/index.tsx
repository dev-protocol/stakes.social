import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  cursor: pointer;
  display: contents;
`

export const A = (props: LinkProps) => {
  return function linkStyledLink(component: ReactNode) {
    return (
      <Link passHref {...props}>
        <StyledLink>{component}</StyledLink>
      </Link>
    )
  }
}
