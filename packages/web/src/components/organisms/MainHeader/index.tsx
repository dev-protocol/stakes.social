import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrap = styled.div`
  height: 12rem;
  display: grid;
  justify-items: center;
  align-items: center;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const Banner = () => {
  return (
    <Link href="//onboarding-sponsors.devprotocol.xyz/" passHref>
      <a target="_blank" rel="noreferrer noopener">
        <Wrap>
          <Img
            src="//onboarding-sponsors.devprotocol.xyz/images/sponsors/sponsors.svg"
            alt="Onboarding Sponsors"
            title="Onboarding Sponsors"
          />
        </Wrap>
      </a>
    </Link>
  )
}
