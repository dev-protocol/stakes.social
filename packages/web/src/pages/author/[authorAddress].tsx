import React, { useMemo, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Header } from 'src/components/organisms/Header'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Footer } from 'src/components/organisms/Footer'
import styled from 'styled-components'
import { LoremIpsum } from 'lorem-ipsum'
import { useListPropertyMetaQuery, useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { useGetMyStakingAmount, useGetTotalStakingAmount } from 'src/fixtures/dev-kit/hooks'
import TopStakers from 'src/components/organisms/TopStakers'
import TopSupporting from 'src/components/organisms/TopSupporting'
import { truncate } from 'src/fixtures/utility/string'
import { useGetAuthorInformation } from 'src/fixtures/devprtcl/hooks'
import { Avatar } from 'src/components/molecules/Avatar'

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

type PoolProps = {
  propertyAddress: string
  propertyName: string
}

const Wrap = styled.div`
  margin: auto auto;
  max-width: 1048px;
`

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  justify-content: center;
  background-color: black;
  padding: 40px 0;
`

const ResponsiveImage = styled.img`
  width: auto;
  height: 200px;
  @media (min-width: 1024px) {
    width: 18rem;
    height: 10rem;
  }
`
const Logo = styled.div`
  display: flex;
  grid-column: 2 / -1;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateY(-50px);
  height: 100px;
  width: 100px;
  border-radius: 90px;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  margin-left: 1em;
  @media (min-width: 768px) {
    margin-left: 0;
    height: 150px;
    width: 150px;
    transform: translateY(-75px);
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  /* margin-left: 1em; */
  /* margin-right: 1em; */
  > div {
    padding: 1em;
  }
  @media (min-width: 768px) {
    > div {
      padding: 0;
      padding-bottom: 1em;
    }
    grid-template-columns: 170px auto;
  }
`

const TransformedGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 120px auto;
  @media (min-width: 768px) {
    grid-template-columns: 170px auto;
  }
`

const PoolsOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr 1fr;
  }
`

const PoolLogoSection = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 20px;
  }
`

const OwnedStake = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const TotalStaked = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const MutedSpan = styled.span`
  color: grey;
  font-size: 0.9em;
`

// const StakeButton = styled.button<{ bgColor?: string }>`
//   padding: 6px 24px;
//   border-radius: 9px;
//   border: none;
//   background-color: #2f80ed;
//   color: white;

//   cursor: pointer;
//   :hover {
//     transition: ease-in-out 0.2s;
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   }
// `

const Card = styled.div`
  width: auto;
  border: solid 1px #f0f0f0;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.2em;
  cursor: pointer;
  background: #fff;
  margin-bottom: 20px;
`

const AuthorDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  div > button {
    align-self: center;
  }
`

const ShareList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    cursor: pointer;
    margin-right: 5px;
  }
`

const AuthorLinks = styled.div`
  display: flex;
  grid-column: 1 / -1;
  transform: translateY(14px);
  font-size: 1.2em;

  a {
    text-decoration: none;
    color: black;

    /* linear-gradient(to right, #1ac9fc, #2f80ed); */
    border-bottom-color: #1ac9fc;
    margin-left: 0.8em;
  }

  a::after {
    content: '';
    display: block;
    height: 5px;
    background: linear-gradient(to right, #1ac9fc, #2f80ed);
  }

  @media (min-width: 768px) {
    transform: translateY(14px);
    grid-column: 2;
    font-size: 1.2em;
    a {
      margin-left: 3em;
    }

    a:first-of-type {
      margin-left: 0em;
    }
  }
`

export const Banner = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Wrap>
        <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto', background: 'black' }}>
          <BannerContainer>
            <Logo>
              <ResponsiveImage src="https://res.cloudinary.com/haas-storage/image/upload/v1598697538/background_wmc31h.png" />
            </Logo>
          </BannerContainer>
        </div>
      </Wrap>
    </div>
  )
}

const Pool = ({ propertyAddress }: PoolProps) => {
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 24),
    [data]
  )

  return (
    <Card>
      <PoolsOverview>
        <PoolLogoSection>
          <img
            width="75px"
            height="75px"
            src="https://res.cloudinary.com/haas-storage/image/upload/v1599219478/61np1wbr9pL_xecoq7.png"
          />
          <h4>{includeAssets}</h4>
        </PoolLogoSection>
        <OwnedStake>
          <span>{myStakingAmount?.dp(2).toNumber() || 0} DEV</span>
          <MutedSpan>Your stake</MutedSpan>
        </OwnedStake>
        <TotalStaked>
          <span>{totalStakingAmount?.dp(2).toNumber() || 0} DEV</span>
          <MutedSpan>Total staked</MutedSpan>
        </TotalStaked>
      </PoolsOverview>
    </Card>
  )
}

const AuthorAddressDetail = (_: Props) => {
  const router = useRouter()
  let { authorAddress } = router.query
  const [isDesktop, setDesktop] = useState(typeof window !== 'undefined' && window?.innerWidth > 1024)
  const author: string = typeof authorAddress == 'string' ? authorAddress : 'none'
  const { data: authorInformation } = useGetAuthorInformation(author)
  const { data, loading } = useListPropertyMetaQuery({
    variables: {
      author
    }
  })

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateMedia)
      return () => window.removeEventListener('resize', updateMedia)
    }
    return setDesktop(true)
  }, [])

  return (
    <>
      <Header></Header>
      <EarlyAccess></EarlyAccess>
      <Banner />
      <Wrap>
        <ProfilePicture>
          <Avatar accountAddress={author} size={isDesktop ? '140' : '90'} />
        </ProfilePicture>

        <TransformedGrid>
          {/* <div style={{ display: 'grid', gridTemplateRows: '1fr' }}> */}
          <div style={{ gridColumn: '2 / -1', marginTop: '10px' }}>
            <AuthorDetailGrid>
              <span style={{ fontSize: '1.25em' }}>Kazuya Kawaguchi</span>
              <ShareList>
                <img
                  src="https://res.cloudinary.com/haas-storage/image/upload/v1600172007/25231_hng64u.png"
                  width="20"
                  height="20"
                />
                <img
                  src="https://res.cloudinary.com/haas-storage/image/upload/v1600172799/earth-globe-meridians-world-33880_tfa0p9.png"
                  width="20"
                  height="20"
                />
                <img
                  src="https://res.cloudinary.com/haas-storage/image/upload/v1600172660/2018_social_media_popular_app_logo_youtube-512_jivvza.webp"
                  width="20"
                  height="20"
                />
              </ShareList>
            </AuthorDetailGrid>

            <p style={{ marginBottom: '15px' }}>
              <span style={{ color: '#1AC9FC' }}>{authorInformation?.karma || 0} </span>karma
            </p>
          </div>
          <AuthorLinks>
            <a href="#about">About</a>
            <a href="#pools">Pools</a>
            <a href="#top-stakers">Stakers</a>
            <a href="#supporting">Supporting</a>
          </AuthorLinks>
        </TransformedGrid>
      </Wrap>
      <hr color="#F5F5F5" style={{ height: '5px' }} />
      <Wrap>
        <Grid>
          <div id="about" style={{ gridColumn: '2 / -1' }}>
            <h2>About</h2>
            <p>{lorem.generateSentences(4)}</p>
            <p>{lorem.generateSentences(4)}</p>
          </div>
          <div id="pools" style={{ gridColumn: '2 / -1', width: '100%' }}>
            <h2>Pools</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {loading && <span>Loading...</span>}

              {data?.property_meta &&
                data?.property_meta?.map((property: { property: string; name: string }, index: number) => (
                  <Pool propertyAddress={property.property} propertyName={property.name} key={index} />
                ))}
            </div>
          </div>
          <div id="top-stakers" style={{ gridColumn: '2 / -1', width: 'auto' }}>
            <h2>Top stakers</h2>
            <TopStakers propertyAdress="0x44d871aebF0126Bf646753E2C976Aa7e68A66c15" />
          </div>
          <div id="supporting" style={{ gridColumn: '2 / -1', width: 'auto' }}>
            <h2>Supporting</h2>
            <TopSupporting accountAddress={author} />
          </div>
        </Grid>
      </Wrap>

      <Footer />
    </>
  )
}

export default AuthorAddressDetail
