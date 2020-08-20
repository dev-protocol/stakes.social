import React from 'react'
import { Button } from 'antd'
import { Headline } from 'src/components/atoms/Headline'
import { H1 } from 'src/components/atoms/Typography'
import { A } from 'src/components/atoms/A'
import styled from 'styled-components'

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: black;
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
`

const Logo = styled.div`
  background-color: black;
`

const ReadMore = styled.span`
  cursor: pointer;
  :hover {
    border-bottom: 1px solid white;
  }
`

export const Banner = () => {
  return (
    <BannerContainer>
      <Slogan>
        <SloganTitle color="white">A Sustainable Economy</SloganTitle>
        <SloganTitle color="white">for Open Assets</SloganTitle>
        <ReadMore>read more</ReadMore>
      </Slogan>
      <Logo>
        <img src="/home/daan/stakes.social/packages/web/src/components/organisms/MainHeader/logo.png" />
      </Logo>
    </BannerContainer>
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
