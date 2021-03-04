import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { IncubatorLogo } from '../Incubator/Icons'
import { Text1Xxl, LinkB } from '../Incubator/Typography'
import IncubatorAnimation from '../Incubator/Jumbo/animation'

const IncubatorBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 300px;
  height: 265px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1em 1em 0 1em;
    height: fit-content;
  }
`
const Wrap = styled.div`
  background: #fbfbfb;
`

const IncubatorLogoContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;

  svg {
    width: 384px;
    height: 64px;
  }

  @media (max-width: 768px) {
    svg {
      width: 260px;
      height: auto;
    }
  }
`

const AnimationContainer = styled.div`
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 0;
  transform: translate(-50%, -53px);
  width: 370px;
  height: 320px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`

const Text1XxlContainer = styled(Text1Xxl)`
  text-align: right;
  @media (max-width: 768px) {
    padding-top: 1em;
    text-align: left;
    font-size: 24px;
    font-family: Whyte;
    font-weight: 400;
    line-height: 40px;
  }
`

const LinkBContainer = styled(LinkB)`
  padding-top: 2em;
  align-self: flex-end;

  @media (max-width: 768px) {
    padding-top: 1em;
    align-self: flex-start;
  }
`

export const Banner = () => {
  return (
    <Wrap>
      <div
        style={{
          position: 'relative',
          maxWidth: '1152px',
          marginRight: 'auto',
          marginLeft: 'auto',
          background: 'transparent'
        }}
      >
        <AnimationContainer>
          <IncubatorAnimation />
        </AnimationContainer>
        <IncubatorBanner>
          <IncubatorLogoContainer>
            <IncubatorLogo />
          </IncubatorLogoContainer>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
            <div style={{ maxHeight: 'fit-content', display: 'flex', flexDirection: 'column', paddingBottom: '1em' }}>
              <Text1XxlContainer>Funding the Most Crucial Open Source Software</Text1XxlContainer>
              <Link href="/incubator">
                <LinkBContainer>Learn more</LinkBContainer>
              </Link>
            </div>
          </div>
        </IncubatorBanner>
      </div>
    </Wrap>
  )
}
