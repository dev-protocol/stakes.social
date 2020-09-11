import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { UserProfile } from 'src/components/organisms/UserProfile'
import { MyStakingProperties } from 'src/components/organisms/MyStakingProperties'

type Props = {}

const SettingsProfile = (_: Props) => {
  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>My Staking Properties</H2>
      </Headline>
      <MyStakingProperties />
      <Headline height={300}>
        <H2>Profile Settings</H2>
      </Headline>
      <UserProfile />
      <Footer />
    </>
  )
}

export default SettingsProfile
