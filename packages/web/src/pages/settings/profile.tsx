import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { UserProfile } from 'src/components/organisms/UserProfile'

type Props = {}

const SettingsProfile = (_: Props) => {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Headline height={300}>
=======
      <Headline height={100}>
>>>>>>> origin/release
        <H2>Profile Settings</H2>
      </Headline>
      <UserProfile />
      <Footer />
    </>
  )
}

export default SettingsProfile
