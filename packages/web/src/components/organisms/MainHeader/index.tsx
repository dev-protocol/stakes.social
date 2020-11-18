import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  padding: 100px 0 40px 0;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 50px 0;
`

const SloganTitle = styled.span`
  color: white;
  font-size: 1.8em;
  @media (min-width: 760px) {
    font-size: 2em;
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const ReadMore = styled.span`
  cursor: pointer;
  margin-top: 5px;
`

const Wrap = styled.div`
  background-color: black;
`

const ResponsiveImage = styled.img`
  width: auto;
  height: 200px;
  @media (min-width: 1024px) {
    width: 24rem;
    height: 14rem;
  }
`

export const Banner = () => {
  return (
    <Wrap>
      <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto', background: 'black' }}>
        <BannerContainer>
          <Slogan>
            <SloganTitle color="white">A Sustainable Economy</SloganTitle>
            <SloganTitle color="white">for Open Assets</SloganTitle>
            <ReadMore>Read More</ReadMore>
          </Slogan>
          <Logo>
            <ResponsiveImage src="https://res.cloudinary.com/haas-storage/image/upload/v1598697538/background_wmc31h.png" />
          </Logo>
        </BannerContainer>
      </div>
    </Wrap>
  )
}
