import React from 'react'
import { useRouter } from 'next/router'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { TransactionForm } from 'src/components/organisms/TransactionForm'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { AssetOutline } from 'src/components/organisms/AssetOutline'
import { Footer } from 'src/components/organisms/Footer'
import Link from 'next/link'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import styled from 'styled-components'
import { Container } from 'src/components/atoms/Container'
import { PropertyCoverImage } from 'src/components/molecules/PropertyCoverImage'
import { Header } from 'src/components/organisms/Header'
import { StakeForm } from 'src/components/organisms/StakeForm'
import { CancelStaking } from 'src/components/organisms/CancelStaking'
import { ConnectedApps } from 'src/components/molecules/ConnectedApps'

type Props = {}

const Main = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'cover'
    'stake'
    'outline'
    'possession'
    'transact'
    'apps'
    'cancel';
  @media (min-width: 1024px) {
    grid-gap: 3rem 2rem;
    grid-template-columns: 0.9fr auto;
    grid-template-areas:
      'cover outline'
      'stake outline'
      'possession outline'
      'apps outline'
      'transact outline'
      'cancel outline';
  }
`
const Cover = styled.div`
  grid-area: cover;
`
const Outline = styled(AssetOutline)`
  grid-area: outline;
`
const Stake = styled(StakeForm)`
  grid-area: stake;
`
const Possession = styled(PossessionOutline)`
  grid-area: possession;
`
const Transact = styled(TransactionForm)`
  grid-area: transact;
`
const Apps = styled(ConnectedApps)`
  grid-area: apps;
`
const Cancel = styled(CancelStaking)`
  grid-area: cancel;
`

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  return (
    <>
      <EarlyAccess></EarlyAccess>
      <Header></Header>
      <Container>
        <PropertyHeader propertyAddress={propertyAddress} />
      </Container>
      <Main>
        <Cover>
          <PropertyCoverImage propertyAddress={propertyAddress}></PropertyCoverImage>
          <Link href="//github.com/dev-protocol/assets" passHref>
            <a target="_blank">Change the cover image</a>
          </Link>
        </Cover>
        <Stake propertyAddress={propertyAddress} />
        <Outline propertyAddress={propertyAddress} />
        <Possession propertyAddress={propertyAddress} />
        <Transact propertyAddress={propertyAddress} />
        <Apps />
        <Cancel propertyAddress={propertyAddress} />
      </Main>
      <Footer />
    </>
  )
}

export default PropertyAddressDetail
