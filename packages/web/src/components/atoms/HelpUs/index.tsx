import React from 'react'
import styled from 'styled-components'
import { Tooltip } from 'antd'

const Circle = styled.a`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  padding: 0;

  svg {
    z-index: 2;
  }

  border: none;
  background: none;
  border-radius: 90px;
  &,
  &:hover,
  &:focus,
  &:active {
    color: white;
  }
  @media (min-width: 768px) {
    bottom: 3rem;
    right: 4rem;
  }
`

export const HelpUs = () => (
  <Tooltip placement="top" color="black" overlayStyle={{ fontSize: '0.8rem' }} title="Do you need help?">
    <Circle href="https://docs.devprotocol.xyz/stakes-social/" target="_blank">
      <div
        style={{ position: 'absolute', width: '20px', height: '20px', left: '15px', top: '15px', background: 'white' }}
      />
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25 4.6875C13.7793 4.6875 4.6875 13.7793 4.6875 25C4.6875 36.2207 13.7793 45.3125 25 45.3125C36.2207 45.3125 45.3125 36.2207 45.3125 25C45.3125 13.7793 36.2207 4.6875 25 4.6875ZM24.5801 34.375C23.4277 34.375 22.4902 33.4961 22.4902 32.3633C22.4902 31.2402 23.4277 30.3516 24.5801 30.3516C25.7422 30.3516 26.6797 31.2305 26.6797 32.3633C26.6797 33.4961 25.752 34.375 24.5801 34.375ZM28.5059 24.9121C26.8066 25.8984 26.2305 26.6211 26.2305 27.8711V28.6426H22.8418L22.8125 27.8027C22.6465 25.791 23.3496 24.541 25.1172 23.5059C26.7676 22.5195 27.4609 21.8945 27.4609 20.6836C27.4609 19.4727 26.2891 18.584 24.834 18.584C23.3594 18.584 22.2949 19.541 22.2168 20.9863H18.75C18.8184 17.8418 21.1426 15.6152 25.0684 15.6152C28.7305 15.6152 31.25 17.6465 31.25 20.5664C31.25 22.5098 30.3125 23.8477 28.5059 24.9121Z"
          fill="#333333"
        />
      </svg>
    </Circle>
  </Tooltip>
)
