import { CompassFilled, GithubFilled } from '@ant-design/icons'
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
  // NOTE: care of 'https://github.com/AUTHOR', 'github.com/AUTHOR', 'AUTHOR' cases.
  const githubUrl = whenDefined(links?.github, github =>
    github.startsWith('github.com/')
      ? `https://${github}`
      : !github.startsWith('https://github.com/')
      ? `https://github.com/${github}`
      : github
  )
  return links ? (
    <Wrap className={className}>
      <Icon url={githubUrl} />
      <Icon url={links.website} />
    </Wrap>
  ) : null
}
