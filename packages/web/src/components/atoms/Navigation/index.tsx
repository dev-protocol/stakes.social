import styled from 'styled-components'
import { Menu } from 'antd'

export const NavMenu = styled(Menu)`
  color: white;

  width: fit-content;

  .ant-menu-item-selected {
    background: -moz-linear-gradient(top, #0062ff 1%, #2187ed 100%);
    background: -webkit-linear-gradient(top, #0062ff 1%, #2187ed 100%);
    background: linear-gradient(to bottom, #0062ff 1%, #2187ed 100%);
  }
`
export const NavMenuItem = styled(NavMenu.Item)`
  background-color: black;
  margin-left: 2em;
`

export const AccountBtn = styled.div<{ currentRouter?: string }>`
  color: ${props => (props.currentRouter === '/profile' ? 'white' : 'grey')};
  position: absolute;
  top: 0px;
  right: 20px;
  font-size: 1em;
  height: 47px;
  cursor: pointer;
  line-height: 45px;
  padding: 0px 15px;

  background: ${props => (props.currentRouter === '/profile' ? '#2f80ed' : 'none')};

  &:hover {
    color: white;
    background: ${props => (props.currentRouter === '/profile' ? '#none' : '#2f80ed')};
  }

  transition: all 0.3s ease 0s;

  @media (max-width: 768px) {
    right: 5px;
    padding: 0px 10px;
    transform: translateY(1px);
    background: black;
  }
`

export const Connecting = styled.div`
  color: white;
  font-size: 0.8em;

  @keyframes blink {
    0% {
      opacity: 0.7;
    }

    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.7;
    }
  }

  -webkit-text-fill-color: white;
  animation-name: blink;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`
