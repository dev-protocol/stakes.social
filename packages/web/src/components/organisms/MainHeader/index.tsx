import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrap = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 20rem;
  }
`

export const Banner = () => {
  return (
    <Link href="" passHref>
      <a target="_blank" rel="noreferrer noopener">
        <Wrap></Wrap>
      </a>
    </Link>
  )
}
