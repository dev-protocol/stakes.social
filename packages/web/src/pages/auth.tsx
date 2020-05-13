import React from 'react'
import { AuthHeader } from 'src/components/organisms/AuthHeader'
import { Footer } from 'src/components/organisms/Footer'

type Props = {}

const Auth = (_: Props) => {
  return (
    <>
      <AuthHeader />
      <Footer />
    </>
  )
}

export default Auth
