import React from 'react'
import styled from 'styled-components'
import { H1S, Text1M, LinkB } from '../../Typography'
import AddTokenToMetamaskAnimation from './Animations'
import { AnimationContainer, Container, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'
import { EthereumIcon } from '../../Icons'

type PostOnboardType = {
  onActivePageChange: React.Dispatch<React.SetStateAction<number>>
}

const SSlogo = () => {
  return (
    <svg width="328" height="264" viewBox="0 0 328 264" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M121.002 55.2821C116.94 54.0064 113.066 53.1348 109.407 52.614C91.0225 49.9976 76.5112 55.8686 66.4826 66.7388C49.3645 85.2934 47.8155 115.015 59.9383 142.994C72.5983 116.879 89.8666 88.3766 112.898 63.6289C115.585 60.7418 118.287 57.9595 121.002 55.2821ZM164 22.0916C148.027 13.007 131.961 7.34088 116.168 5.09331C82.704 0.330832 52.3026 11.3266 31.21 34.1891C-10.467 79.3635 1.45889 144.263 28.7828 185.912C31.565 190.153 34.5828 194.172 37.8059 197.973C35.8386 203.981 34.2179 209.363 32.9144 213.944C31.4479 219.098 30.3771 223.259 29.6617 226.184C29.3039 227.648 29.0345 228.804 28.8486 229.622C28.7557 230.032 28.6836 230.357 28.6317 230.594L28.5689 230.883L28.5487 230.977L28.5384 231.026C28.5384 231.026 28.5359 231.037 52.015 235.995L28.5359 231.037C25.798 244.006 34.0905 256.739 47.0576 259.477C60.0216 262.215 72.7499 253.926 75.4921 240.963L75.4942 240.953L75.5144 240.861L75.6501 240.254C75.7798 239.683 75.9887 238.784 76.2813 237.587C76.7222 235.784 77.3523 233.309 78.1871 230.261C105.085 244.852 135.836 251.562 162.957 251.562C163.307 251.562 163.654 251.554 164 251.54C164.346 251.554 164.693 251.562 165.043 251.562C192.164 251.562 222.915 244.852 249.813 230.261C250.648 233.309 251.278 235.784 251.719 237.587C252.011 238.784 252.22 239.683 252.35 240.254L252.486 240.861L252.506 240.953L252.508 240.963C255.25 253.926 267.978 262.215 280.942 259.477C293.91 256.739 302.202 244.006 299.464 231.037L275.985 235.995C299.464 231.037 299.462 231.026 299.462 231.026L299.451 230.977L299.431 230.883L299.368 230.594C299.316 230.357 299.244 230.032 299.151 229.622C298.966 228.804 298.696 227.648 298.338 226.184C297.623 223.259 296.552 219.098 295.086 213.944C293.782 209.363 292.161 203.981 290.194 197.973C293.417 194.172 296.435 190.153 299.217 185.912C326.541 144.263 338.467 79.3635 296.79 34.1891C275.697 11.3266 245.296 0.330832 211.832 5.09331C196.039 7.34088 179.973 13.007 164 22.0916ZM164 80.8385C158.785 85.3609 153.452 90.5052 148.029 96.3318C123.382 122.815 105.886 155.643 94.1499 183.931C113.844 196.651 139.065 203.562 162.957 203.562C163.307 203.562 163.654 203.57 164 203.585C164.346 203.57 164.693 203.562 165.043 203.562C188.935 203.562 214.156 196.651 233.85 183.93C222.114 155.643 204.618 122.815 179.971 96.3318C174.548 90.5052 169.215 85.3609 164 80.8385ZM268.062 142.994C255.402 116.879 238.133 88.3766 215.102 63.6289C212.415 60.7418 209.713 57.9595 206.998 55.2821C211.06 54.0064 214.934 53.1348 218.593 52.614C236.978 49.9976 251.489 55.8686 261.517 66.7388C278.635 85.2934 280.184 115.015 268.062 142.994Z"
          fill="#FF3815"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="328"
          height="264"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.219608 0 0 0 0 0.0823529 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const LinkWithIcon = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background: none;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};

  abbr {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
  }

  img,
  svg {
    margin-right: 5px;
  }
`

const SsContainer = styled.div`
  svg {
    width: 20px;
    height: 16px;
  }
`

const DevTokenExplanation = ({ onActivePageChange }: PostOnboardType) => {
  return (
    <Container>
      <AnimationContainer>
        <AddTokenToMetamaskAnimation />
      </AnimationContainer>
      <DescriptionContainer>
        <H1S>How your DEV token works</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          The DEV token is a governance token with utility that is minted via inflation. Patrons stake DEV tokens for
          OSS projects they want to support. OSS projects can choose to sell the DEV token to fund their projects or
          stake it for other OSS projects. The DEV token also gives you voting rights on protocol decisions.
        </Text1M>
        <SpaceBetween style={{ paddingTop: '32px' }}>
          <LinkWithIcon>
            <EthereumIcon />
            <LinkB
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?inputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26&use=V2"
            >
              Sell DEV for ETH
            </LinkB>
          </LinkWithIcon>
          <LinkWithIcon>
            <SsContainer>
              <SSlogo />
            </SsContainer>

            <LinkB target="_blank" rel="noopener noreferrer" href="https://stakes.social/">
              Fund other OSS projects
            </LinkB>
          </LinkWithIcon>
        </SpaceBetween>
        <BoardingNavigation
          backwardCallback={() => onActivePageChange(2)}
          forwardCallback={() => onActivePageChange(4)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default DevTokenExplanation
