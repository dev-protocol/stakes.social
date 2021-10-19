import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { BuyDevButton } from 'src/components/molecules/BuyButton'
import { useGetAuthorInformation } from 'src/fixtures/devprtcl/hooks'
import { WithGradient } from 'src/components/atoms/WithGradient'
import ReactMarkdown from 'react-markdown'
import { useClipboard } from 'use-clipboard-copy'
import { CopyOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import ShareTweet from '../../atoms/ShareButtons'
import { usePropertyAuthor, usePropertyName } from 'src/fixtures/dev-kit/hooks'

const ResponsivePropertyAddressFrame = styled.div`
  margin: 1rem auto;
`

const Header = styled.h1`
  margin: 0;
  word-break: break-all;
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledDivider = styled.div`
  padding: 0;
  margin-left: 2px;
  margin-right: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`

const ResponsiveSubheaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ApyContainer = styled.div`
  display: flex;
  width: 95%;
  margin-top: 10px;
  margin-bottom: 0;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 80%;
    justify-content: flex-start;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    a {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
  align-self: flex-start;
  margin-left: 10px;
  margin-top: 2px;

  @media (min-width: 768px) {
    align-self: auto;
    margin-top: 8px;
  }
`

const IconContainer = styled.div`
  svg {
    width: 16px;
    height: auto;
  }
  @media (min-width: 768px) {
    margin-left: 2px;
  }
`

const CopyContainer = styled.div`
  display: flex;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    p {
      height: 20px;
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
`

interface Props {
  propertyAddress: string
  apy?: BigNumber
  creators?: BigNumber
}

export const CopyBadge = ({ propertyAddress }: { propertyAddress: string }) => {
  const badge = `[![Stake to support us](https://badge.devprotocol.xyz/${propertyAddress}/descriptive)](https://stakes.social/${propertyAddress})`
  const { copied, copy } = useClipboard({
    copiedTimeout: 1000
  })
  const handleCopy = () => {
    copy(badge)
  }

  return (
    <CopyContainer>
      <ReactMarkdown>{badge}</ReactMarkdown>
      <FlexRow onClick={handleCopy}>
        <IconContainer>
          {!copied && <CopyOutlined />}
          {copied && <CheckCircleTwoTone twoToneColor="#52c41a" />}
        </IconContainer>
        <span style={{ fontSize: '0.8em', marginLeft: '2px' }}>{!copied ? 'Copy' : 'Copied badge!'}</span>
      </FlexRow>
    </CopyContainer>
  )
}

export const PropertyHeader = ({ propertyAddress, apy, creators }: Props) => {
  const { name: propertyName } = usePropertyName(propertyAddress)
  const { author } = usePropertyAuthor(propertyAddress)
  const { data: dataAuthor } = useGetAuthorInformation(author)

  return (
    <ResponsivePropertyAddressFrame>
      <HeaderContainer>
        <Header>{propertyName ? `${propertyName} Pool` : ''}</Header>
        <CopyBadge propertyAddress={propertyAddress} />
      </HeaderContainer>
      <ShareTweet title={propertyName || 'N/A'}></ShareTweet>
      <SubHeader>
        <ApyContainer>
          <ResponsiveSubheaderSection>
            <WithGradient>{apy?.dp(0).toNumber() || 'N/A'}%</WithGradient>
            <StyledDivider />
            <span>APY Stakers</span>
          </ResponsiveSubheaderSection>
          <StyledDivider>|</StyledDivider>
          <ResponsiveSubheaderSection>
            <WithGradient> {creators?.dp(0).toNumber() || 'N/A'}%</WithGradient>
            <StyledDivider />
            <span>APY Creators</span>
          </ResponsiveSubheaderSection>
          <StyledDivider>|</StyledDivider>
          <ResponsiveSubheaderSection>
            <WithGradient> {dataAuthor?.karma.toLocaleString() || 'N/A'}</WithGradient>
            <StyledDivider />
            <span>Karma</span>
          </ResponsiveSubheaderSection>
        </ApyContainer>
        <ButtonContainer>
          <BuyDevButton />
        </ButtonContainer>
      </SubHeader>
    </ResponsivePropertyAddressFrame>
  )
}
