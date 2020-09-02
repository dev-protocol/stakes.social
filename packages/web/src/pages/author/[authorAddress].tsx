import React from 'react'
import { useRouter } from 'next/router'
import { Header } from 'src/components/organisms/Header'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Footer } from 'src/components/organisms/Footer'
import styled from 'styled-components'
import { Container } from 'src/components/atoms/Container'

type Props = {}

const Wrap = styled.div`
  margin: auto auto;
  max-width: 1048px;
`

const Main = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-gap: 3rem 2rem;
    grid-template-columns: 1fr;
  }
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
  height: 150px;
  width: 150px;
  border-radius: 90px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
`
const Flex = styled.div`
  display: grid;
  grid-template-columns: 170px auto;
  transform: translateY(-75px);
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

const AuthorAddressDetail = (_: Props) => {
  const router = useRouter()
  const { authorAddress: author } = router.query
  return (
    <>
      <Header></Header>
      <EarlyAccess></EarlyAccess>
      <Banner />
      <Wrap>
        {/* <Main> */}
        <Flex>
          <ProfilePicture src="https://res.cloudinary.com/haas-storage/image/upload/v1598963050/72989_gve7hf.jpg" />
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}>
            <div style={{ gridRow: '2 / -1' }}>
              <h2>Kazuya Kawaguchi</h2>
              <div>5,000 karma</div>
            </div>
          </div>
        </Flex>
        {/* </Main> */}
      </Wrap>
      <hr color="lightgrey" />
      <Wrap>
        <Main>
          <div>sup {author}</div>
        </Main>
      </Wrap>

      <Footer />
    </>
  )
}

export default AuthorAddressDetail
