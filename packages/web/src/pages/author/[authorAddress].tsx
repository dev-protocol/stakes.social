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
        <Main>
          <div>sup {author}</div>
        </Main>
      </Wrap>

      <Footer />
    </>
  )
}

export default AuthorAddressDetail
