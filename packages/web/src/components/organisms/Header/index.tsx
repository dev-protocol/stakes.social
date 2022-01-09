import * as React from 'react'
import styled from 'styled-components'
import { Navigation } from 'src/components/molecules/Navigation'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  flex-grow: 1;
`

export const Header = () => {
  return (
    <header>
      <Navigation />
      <EarlyAccess />
    </header>
  )
}
