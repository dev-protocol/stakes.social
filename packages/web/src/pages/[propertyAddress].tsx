import React, { useMemo, useEffect } from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { Footer } from 'src/components/organisms/Footer'
import styled from 'styled-components'
import { Container } from 'src/components/atoms/Container'
import { Header } from 'src/components/organisms/Header'
import TopStakers from 'src/components/organisms/TopStakers'
import { useAPY, usePropertyAuthor } from 'src/fixtures/dev-kit/hooks'
import { useGetPropertyAuthenticationQuery, useGetPropertyAggregateLazyQuery } from '@dev/graphql'
import { PlusOutlined, LinkOutlined } from '@ant-design/icons'
import { Button, Spin, Skeleton } from 'antd'
import Link from 'next/link'
import { useGetPropertytInformation } from 'src/fixtures/devprtcl/hooks'
import { useGetAccount, useGetProperty } from 'src/fixtures/dev-for-apps/hooks'
import ReactMarkdown from 'react-markdown'
import { WithGradient } from 'src/components/atoms/WithGradient'
import { Stake } from 'src/components/organisms/Stake'
import { Withdraw } from 'src/components/organisms/Withdraw'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { Avatar } from 'src/components/molecules/Avatar'
import { CoverImageOrGradient } from 'src/components/atoms/CoverImageOrGradient'
import { H3 } from 'src/components/atoms/Typography'
import { Twitter, Github } from 'src/components/atoms/SocialButtons'
import { getPath } from 'src/fixtures/utility/route'

type Props = {}

const Main = styled(Container)`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-gap: 3rem 2rem;
  }
`

const TopStakerList = styled(TopStakers)``

const Transact = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
`
const Possession = styled(PossessionOutline)``

const Wrap = styled.div`
  margin: 1rem auto;
  max-width: 1048px;
`

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
`

const AssetsSection = styled.div`
  display: flex;
  flex-direction: column;
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

const RoundedCoverImageOrGradient = styled(CoverImageOrGradient)`
  border-radius: 5px;
`
const LinksArea = styled.div`
  display: flex;
  align-items: start;
  margin-left: -20px;
`

const formatter = new Intl.NumberFormat('en-US')

const Author = ({ propertyAddress }: { propertyAddress: string }) => {
  const { data, error } = useGetPropertytInformation(propertyAddress)
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const { data: dataAuthor } = useGetAccount(authorAddress)

  const [fetchAggregate, { data: aggregateData }] = useGetPropertyAggregateLazyQuery()

  useEffect(() => {
    if (authorAddress) {
      fetchAggregate({
        variables: {
          authorAddress
        }
      })
    }
  }, [authorAddress, fetchAggregate])

  return (
    <AuthorContainer>
      {data && (
        <>
          <h2>
            Created by <Link href={`/author/${authorAddress}`}>{dataAuthor?.name || data?.name}</Link>
          </h2>
          <Flex>
            <Link passHref href="/author/[accountAddress]" as={`/author/${authorAddress}`}>
              <a>
                <div style={{ width: '150px' }}>
                  <Avatar size={'150'} accountAddress={authorAddress} />
                </div>
              </a>
            </Link>

            <CreatorContent>
              <ReactMarkdown>{dataAuthor ? dataAuthor.biography : ''}</ReactMarkdown>
              <p>
                <WithGradient>{aggregateData?.property_meta_aggregate.aggregate?.count || 0}</WithGradient> Pool(s) |{' '}
                <WithGradient>{data?.author?.karma ? formatter.format(data?.author.karma) : 0} </WithGradient> Karma
              </p>
            </CreatorContent>
          </Flex>
        </>
      )}

      {!data && !error && (
        <>
          <div>Author</div>
          <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />
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
  const [propertyAddress] = getPath(useRouter().asPath)
  const { apy, creators } = useAPY()
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const isExistProperty = useMemo(() => data && data?.property_authentication.length > 0, [data])
  const { data: dataProperty } = useGetProperty(isExistProperty ? propertyAddress : undefined)
  const { data: propertyInformation } = useGetPropertytInformation(isExistProperty ? propertyAddress : undefined)
  /* eslint-disable react-hooks/exhaustive-deps */
  // FYI: https://github.com/facebook/react/pull/19062
  const includedAssetList = useMemo(() => data?.property_authentication.map(e => e.authentication_id), [data])
  const { accountAddress: loggedInWallet } = useProvider()
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)

  return data && !isExistProperty ? (
    // property is not found
    <Error statusCode={404} />
  ) : (
    <>
      <Header></Header>
      <Wrap>
        <Container>
          {data ? (
            <PropertyHeader apy={apy} creators={creators} propertyAddress={propertyAddress} />
          ) : (
            <Skeleton active paragraph={{ rows: 1 }} />
          )}
        </Container>
        <Main>
          <RoundedCoverImageOrGradient src={dataProperty?.cover_image?.url} ratio={52.5} />
          {isExistProperty && <Possession propertyAddress={propertyAddress} />}
          <Transact>
            {isExistProperty && (loggedInWallet ? loggedInWallet !== authorAddress : true) && (
              <Stake title="Stake" propertyAddress={propertyAddress} />
            )}
            {isExistProperty && <Withdraw title="Withdraw" propertyAddress={propertyAddress} />}
          </Transact>
          <AboutSection>
            <h2>About</h2>
            <ReactMarkdown>{dataProperty ? dataProperty.description : ''}</ReactMarkdown>
            <H3>Links</H3>
            <LinksArea>
              {dataProperty?.links?.github && (
                <Github href={dataProperty?.links.github} target="_blank" rel="noopener noreferrer" />
              )}
              {dataProperty?.links?.twitter && (
                <Twitter href={dataProperty?.links.twitter} target="_blank" rel="noopener noreferrer" />
              )}
              {dataProperty?.links?.website && (
                <Button
                  style={{ marginLeft: '20px', padding: 3, width: '38px', height: '38px' }}
                  shape="circle"
                  icon={<LinkOutlined />}
                  href={dataProperty?.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
            </LinksArea>
          </AboutSection>
          <AssetsSection>
            <h2>Included assets</h2>
            <AssetList>
              {includedAssetList?.map((asset: any, index: any) => (
                <AssetListItem key={index}>{asset}</AssetListItem>
              ))}
              {propertyInformation?.author?.address === loggedInWallet && (
                <Link href={'/create/[property]'} as={`/create/${propertyAddress}`}>
                  <AddAsset>
                    <PlusOutlined />
                    <span>Add asset</span>
                  </AddAsset>
                </Link>
              )}
            </AssetList>
          </AssetsSection>
          {isExistProperty && <Author propertyAddress={propertyAddress} />}
          <div>
            <h2>Top stakers</h2>
            {isExistProperty && <TopStakerList propertyAddress={propertyAddress} />}
          </div>
        </Main>
      </Wrap>

      <Footer />
    </>
  )
}

export default PropertyAddressDetail
