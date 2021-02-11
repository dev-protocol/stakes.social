import React from 'react'
import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import { Footer } from 'src/components/organisms/Footer'
import { Container } from 'src/components/atoms/Container'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
  display: flex;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  flex-flow: column;
  flex-grow: 1;
`

const Incubator = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <IncubatorHeader />
      <StyledContainer>
        <div>hoi</div>
      </StyledContainer>
      <Footer />
    </div>
  )
}

export default Incubator
