import React from 'react'
import { Span } from '../../Typography'
import { Button } from '../../molecules/Button'
import BoardingGrid from '../../molecules/BoardingGrid'
import AnimationContainer from '../../molecules/AnimationContainer'

type PostOnboardType = {
  onActivePageChange: React.Dispatch<React.SetStateAction<number>>
}

const OssTokenLogo = () => {
  return (
    <div>
      <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 160C0 71.6 71.6 0 160 0C248.4 0 320 71.6 320 160C320 248.4 248.4 320 160 320C71.6 320 0 248.4 0 160Z"
          fill="black"
        />
        <path d="M64 192H32V224H64V192Z" fill="#00D0FD" />
        <path d="M64 192V224H96V192V160H64V192Z" fill="#5B8BF5" />
        <path d="M160 160V192V224H192H224H256V192V160H288V128V96H256V128H224V160V192H192V160H160Z" fill="#FF3815" />
        <path d="M96 160V192H128H160V160V128H128H96V160Z" fill="#D500E6" />
      </svg>
    </div>
  )
}

const OssTokenExplanation = ({ onActivePageChange }: PostOnboardType) => {
  return (
    <BoardingGrid>
      <AnimationContainer>
        <OssTokenLogo />
      </AnimationContainer>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Span style={{ paddingTop: '3em' }} fontSize="24px" fontWeight="bold">
          How your OSS token works
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Span>
      </div>
      <div style={{ paddingBottom: '5em', gridColumn: '1/-1', display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => onActivePageChange(5)}>Next</Button>
      </div>
    </BoardingGrid>
  )
}

export default OssTokenExplanation
