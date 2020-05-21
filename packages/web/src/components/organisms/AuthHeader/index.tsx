import React from 'react'
import { Header } from '../Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'

export const AuthHeader = () => {
  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>Choose Market</H2>
        <div>Select one asset market to authenticate.</div>
      </Headline>
    </>
  )
}
