import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrap = styled.div`
  height: 12rem;
  display: grid;
  justify-items: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 20rem;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const Banner = () => {
  return (
    <Link href="#/" passHref>
      <a target="_blank" rel="noreferrer noopener">
        <Wrap>
          <Img
            src="#"
            alt="#"
            title="#"
          />
        </Wrap>
      </a>
    </Link>
  )
}
