import React, { useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import styled from 'styled-components'
import { Container } from 'src/components/atoms/Container'
import { Header } from 'src/components/organisms/Header'
import { StakeForm } from 'src/components/organisms/StakeForm'
import { CancelStaking } from 'src/components/organisms/CancelStaking'
// import { PropertyTags } from 'src/components/organisms/PropertyTags'
import TopStakers from 'src/components/organisms/TopStakers'
import { Avatar } from 'src/components/molecules/Avatar'
import { useAPY } from 'src/fixtures/dev-kit/hooks'
import { LoremIpsum } from 'lorem-ipsum'
import { useGetPropertyAuthenticationQuery, useGetPropertyAggregateLazyQuery } from '@dev/graphql'
import { PlusOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useGetPropertytInformation } from 'src/fixtures/devprtcl/hooks'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

type Props = {}

const Main = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    'cover'
    'possession'
    'stake'
    'about'
    'assets'
    'author'
    'topstake'
    'cancel';
  @media (min-width: 1024px) {
    grid-gap: 3rem 2rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      'cover'
      'possession'
      'stake'
      'about'
      'assets'
      'author'
      'topstake'
      'cancel';
  }
`
const Cover = styled.div`
  grid-area: cover;
  img {
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  }
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

const Cancel = styled(CancelStaking)`
  grid-area: cancel;
`
// const Tags = styled(PropertyTags)`
//   grid-area: tags;
// `

const Wrap = styled.div`
  margin: 2rem auto;
  max-width: 1048px;
  @media (min-width: 768px) {
    margin: 5rem auto;
  }
`

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: about;
`

const AssetsSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: assets;
`
const AssetList = styled.div`
  display: flex;
`

const AssetListItem = styled.div`
  padding: 5px 8px;
  border: 1px solid lightgrey;
  border-radius: 6px;
  margin-right: 5px;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
`

const AddAsset = styled.button`
  display: flex;
  background: none;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 1px solid lightgrey;
  border-radius: 6px;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
    transition: 0.2 ease-in;
  }
`

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  grid-area: author;
`

const Flex = styled.div`
  display: flex;
  /* align-items: center; */

  img {
    border-radius: 90px;
  }
`

const CreatorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

const AboutParagraph = styled.p`
  @media (min-width: 768px) {
    padding-top: 15px;
  }
`

const Author = ({ propertyAddress }: { propertyAddress: string }) => {
  const { data, error } = useGetPropertytInformation(propertyAddress)

  const [fetchAggregate, { data: aggregateData }] = useGetPropertyAggregateLazyQuery()

  useEffect(() => {
    if (data?.author.address) {
      fetchAggregate({
        variables: {
          authorAddress: data?.author?.address
        }
      })
    }
  }, [data, fetchAggregate])

  return (
    <AuthorContainer>
      {data && (
        <>
          <h2>Created by {data?.name}</h2>
          <Flex>
            <div style={{ width: '150px' }}>
              <Avatar accountAddress={data?.author.address} size={'150'} />
            </div>

            <CreatorContent>
              <AboutParagraph>{lorem.generateSentences(4)}</AboutParagraph>
              <p>
                <span style={{ color: '#1AC9FC' }}>{aggregateData?.property_meta_aggregate.aggregate?.count || 0}</span>{' '}
                Pool(s) | <span style={{ color: '#1AC9FC' }}>{data?.author?.karma || 0} </span> Karma
              </p>
            </CreatorContent>
          </Flex>
        </>
      )}

      {!data && !error && (
        <>
          <div>Author</div>
          <div>Loading...</div>
        </>
      )}

      {error && (
        <>
          <div>Author</div>
          <div>Cannot load: {error.message}</div>
        </>
      )}
    </AuthorContainer>
  )
}

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }
  const { apy, creators } = useAPY()
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  /* eslint-disable react-hooks/exhaustive-deps */
  // FYI: https://github.com/facebook/react/pull/19062
  const includedAssetList = useMemo(() => data?.property_authentication.map(e => e.authentication_id), [data])

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
            <img
              width="100%"
              height="auto"
              src="https://res.cloudinary.com/haas-storage/image/upload/v1598703382/vue_xfbs8i.webp"
            />
          </Cover>
          <div>
            <h2>Top stakers</h2>
            <TopStakerList propertyAdress={propertyAddress} />
          </div>
          <Stake propertyAddress={propertyAddress} />
          <AboutSection>
            <h2>About</h2>
            <p>{lorem.generateParagraphs(2)}</p>
          </AboutSection>
          <AssetsSection>
            <h2>Included assets</h2>
            <AssetList>
              {includedAssetList?.map((asset, index) => (
                <AssetListItem key={index}>{asset}</AssetListItem>
              ))}
              <Link href={'/auth/[property]'} as={`/auth/${propertyAddress}`}>
                <AddAsset>
                  <PlusOutlined />
                  <span>Add asset</span>
                </AddAsset>
              </Link>
            </AssetList>
          </AssetsSection>
          <Author propertyAddress={propertyAddress} />
          {/* <Outline propertyAddress={propertyAddress} /> */}
          <Possession propertyAddress={propertyAddress} />
          {/* <Apps /> */}
          <Cancel propertyAddress={propertyAddress} />
        </Main>
      </Wrap>

      <Footer />
    </>
  )
}

export default PropertyAddressDetail
