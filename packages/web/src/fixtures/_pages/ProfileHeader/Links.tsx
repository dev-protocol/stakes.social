import CompassFilled from '@ant-design/icons/lib/icons/CompassFilled'
import GithubFilled from '@ant-design/icons/lib/icons/GithubFilled'
import Link from 'next/link'
import React from 'react'
import { Grid } from 'src/components/atoms/Grid'
import { NullableProfileLinks } from 'src/fixtures/dev-for-apps/utility'
import { whenDefined, whenDefinedAll } from 'src/fixtures/utility'
import styled from 'styled-components'

interface Props {
  links?: NullableProfileLinks
  className?: string
}

const Wrap = styled(Grid)`
  grid-auto-flow: column;
  justify-content: start;
  gap: 1rem;
`

const StyledA = styled.a`
  color: black;
  font-size: 1.6rem;
`

const Icon = ({ url }: { url?: string }) => {
  const type = whenDefined(url, u => (u.includes('github.com') ? 'github' : 'website'))
  const icon = whenDefined(type, t => (t === 'github' ? <GithubFilled /> : <CompassFilled />))
  return (
    whenDefinedAll([url, icon], ([u, i]) => (
      <Link href={u} passHref>
        <StyledA target="_blank" rel="noreferer">
          {i}
        </StyledA>
      </Link>
    )) ?? null
  )
}

export const Links = ({ links, className }: Props) => {
  return links ? (
    <Wrap className={className}>
      <Icon url={links.github} />
      <Icon url={links.website} />
    </Wrap>
  ) : null
}
