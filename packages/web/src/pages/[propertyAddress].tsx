import React from 'react'
import { useRouter } from 'next/router'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { TransactionForm } from 'src/components/organisms/TransactionForm'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { AssetOutline } from 'src/components/organisms/AssetOutline'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import styled from 'styled-components'
import { Container } from 'src/components/atoms/Container'
import { Header } from 'src/components/organisms/Header'
import { StakeForm } from 'src/components/organisms/StakeForm'
import { CancelStaking } from 'src/components/organisms/CancelStaking'
import { ConnectedApps } from 'src/components/molecules/ConnectedApps'
import TopStakers from 'src/components/organisms/TopStakers'
import { useAPY } from 'src/fixtures/dev-kit/hooks'

type Props = {}

const Main = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'cover'
    'possession'
    'stake'
    'topstake'
    'outline'
    'transact'
    'apps'
    'cancel';
  @media (min-width: 1024px) {
    grid-gap: 3rem 2rem;
    grid-template-columns: 0.9fr auto;
    grid-template-areas:
      'cover cover'
      'possession possession'
      /* 'topstake outline' */
      'stake stake'
      'transact outline'
      'apps outline'
      'cancel outline';
  }
`
const Cover = styled.div`
  grid-area: cover;
  img {
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  }
`
const Outline = styled(AssetOutline)`
  grid-area: outline;
`

const TopStakerList = styled(TopStakers)`
  grid-area: topstake;
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

const Wrap = styled.div`
  margin: auto auto;
  max-width: 1048px;
`

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }
  const { apy, creators } = useAPY()

  return (
    <>
      <Header></Header>
      <EarlyAccess></EarlyAccess>
      <Wrap>
        <Container>
          <PropertyHeader apy={apy} creators={creators} propertyAddress={propertyAddress} />
        </Container>
        <Main>
          <Cover>
            {/* <PropertyCoverImage propertyAddress={propertyAddress}></PropertyCoverImage> */}
            <img
              width="100%"
              height="auto"
              src="https://res.cloudinary.com/haas-storage/image/upload/v1598703382/vue_xfbs8i.webp"
            />
          </Cover>
          <TopStakerList propertyAdress={propertyAddress} />
          <Stake propertyAddress={propertyAddress} />
          <Outline propertyAddress={propertyAddress} />
          <Possession propertyAddress={propertyAddress} />
          <Transact propertyAddress={propertyAddress} />
          <Apps />
          <Cancel propertyAddress={propertyAddress} />
        </Main>
      </Wrap>

      <Footer />
    </>
  )
}

export default PropertyAddressDetail
