import React from 'react'
import { Button } from 'antd'
import { Headline } from 'src/components/atoms/Headline'
import { H1 } from 'src/components/atoms/Typography'
import { A } from 'src/components/atoms/A'
import styled from 'styled-components'

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  padding: 40px 0;
  img {
    width: 300px;
    height: 200px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    img {
      width: 600px;
      height: 300px;
    }
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

const SloganTitle = styled.h1`
  color: white;
  font-size: 2em;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const ReadMore = styled.span`
  cursor: pointer;
  border-bottom: 1px solid white;
`

const Wrap = styled.div`
  background-color: black;
`

export const Banner = () => {
  return (
    <Wrap>
      <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto', background: 'black' }}>
        <BannerContainer>
          <Slogan>
            <SloganTitle color="white">A Sustainable Economy</SloganTitle>
            <SloganTitle color="white">for Open Assets</SloganTitle>
            <ReadMore>read more</ReadMore>
          </Slogan>
          <Logo>
            <img
              width="24 rem"
              height="12 rem"
              src="https://res.cloudinary.com/haas-storage/image/upload/v1597920927/b8793a8c-5200-4b5e-84fb-d6bf9fcbfb10_mo0xb5.jpg"
            />
          </Logo>
        </BannerContainer>
      </div>
    </Wrap>
  )
}

// export const Banner = () => {
//   return (
//     <>
//       <Headline>
//         <H1>Make a community sustainable together</H1>
//         {A({ href: '/how-it-works' })(
//           <Button type="primary" size="large">
//             How it works
//           </Button>
//         )}
//       </Headline>
//     </>
//   )
// }
