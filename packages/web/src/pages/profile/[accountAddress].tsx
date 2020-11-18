import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Container } from 'src/components/atoms/Container'
import { useRouter } from 'next/router'
import { ProfileHeader } from 'src/components/_pages/profile/ProfileHeader'

const Profile = () => {
  const { accountAddress } = useRouter().query as { accountAddress: string }

  return (
    <>
      <EarlyAccess></EarlyAccess>
      <Header></Header>
      <ProfileHeader accountAddress={accountAddress} />
      <Container></Container>
      <Footer />
    </>
  )
}

export default Profile
