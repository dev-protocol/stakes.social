import React, { useMemo } from 'react'
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
// import { useGetPropertytInformation } from 'src/fixtures/devprtcl/hooks'

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

const ProfilePicture = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 90px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  margin-left: 1em;
  @media (min-width: 768px) {
    margin-left: 0;
    height: 150px;
    width: 150px;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  > div {
    padding: 16px;
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
  display: grid;
  grid-template-columns: 120px auto;
  transform: translateY(-50px);
  @media (min-width: 768px) {
    transform: translateY(-75px);
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

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `

const StakeButton = styled.button<{ bgColor?: string }>`
  padding: 6px 24px;
  border-radius: 9px;
  border: none;
  background-color: #2f80ed;
  color: white;

  cursor: pointer;
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`

// const WithdrawButton = styled.button<{ bgColor?: string }>`
//   padding: 6px 24px;
//   border-radius: 9px;
//   border: transparent;

//   background-color: transparent;
//   color: grey;
//   cursor: pointer;
// `

const Card = styled.div`
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
  grid-template-columns: 1fr 1fr 1fr;

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
          <h3>{includeAssets}</h3>
        </PoolLogoSection>
        <OwnedStake>
          <span>{myStakingAmount?.dp(2).toNumber() || 0} DEV</span>
          <MutedSpan>Your stake</MutedSpan>
        </OwnedStake>
        <TotalStaked>
          <span>{totalStakingAmount?.dp(2).toNumber() || 0} DEV</span>
          <MutedSpan>Total staked</MutedSpan>
        </TotalStaked>
        {/* <ButtonContainer>
          <StakeButton>Stake</StakeButton>
          <WithdrawButton>Withdraw</WithdrawButton>
        </ButtonContainer> */}
      </PoolsOverview>
    </Card>
  )
}

const AuthorAddressDetail = (_: Props) => {
  const router = useRouter()
  let { authorAddress } = router.query
  const author: string = typeof authorAddress == 'string' ? authorAddress : 'none'
  // const { data, error } = useGetPropertytInformation(propertyAddress)
  // const { data: authorData } = useGetPropertytInformation(author)
  const { data, loading } = useListPropertyMetaQuery({
    variables: {
      author
    }
  })

  // console.log(authorData)

  return (
    <>
      <Header></Header>
      <EarlyAccess></EarlyAccess>
      <Banner />
      <Wrap>
        <TransformedGrid>
          <ProfilePicture src="https://res.cloudinary.com/haas-storage/image/upload/v1598963050/72989_gve7hf.jpg" />
          <div style={{ display: 'grid', gridTemplateRows: '1fr' }}>
            <div style={{ gridRow: '2 / -1', marginTop: '50px' }}>
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
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <StakeButton>Edit</StakeButton>
                </div>
              </AuthorDetailGrid>

              <div>5,000 karma</div>
            </div>
          </div>
        </TransformedGrid>
      </Wrap>
      <hr color="lightgrey" />
      <Wrap>
        <Grid>
          <div style={{ gridColumn: '2 / -1' }}>
            <h2>About</h2>
            <p>{lorem.generateSentences(4)}</p>
            <p>{lorem.generateSentences(4)}</p>
          </div>
          <div style={{ gridColumn: '2 / -1' }}>
            <h2>Pools</h2>
            <div>
              {loading && <span>Loading...</span>}

              {data?.property_meta &&
                data?.property_meta?.map((property: { property: string; name: string }, index: number) => (
                  <Pool propertyAddress={property.property} propertyName={property.name} key={index} />
                ))}
            </div>
          </div>
          <div style={{ gridColumn: '2 / -1' }}>
            <h2>Top stakers</h2>
            <TopStakers propertyAdress="0x44d871aebF0126Bf646753E2C976Aa7e68A66c15" />
          </div>
          <div style={{ gridColumn: '2 / -1' }}>
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
