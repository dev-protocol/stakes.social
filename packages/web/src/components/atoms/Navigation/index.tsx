import styled from 'styled-components'
import { Menu } from 'antd'

export const NavMenu = styled(Menu)`
  color: white;

  .ant-menu-item-selected {
    background: -moz-linear-gradient(top, #639fff 1%, #2187ed 100%);
    background: -webkit-linear-gradient(top, #639fff 1%, #2187ed 100%);
    background: linear-gradient(to bottom, #639fff 1%, #2187ed 100%);
  }
`
export const NavMenuItem = styled(NavMenu.Item)`
  background-color: black;
  a.link:hover {
    background-color: yellow;
  }
  margin-right: 3em;
`

export const AccountBtn = styled.div`
  color: white;
  position: absolute;
  font-size: 1.1rem;
  height: 47px;
  cursor: pointer;
  line-height: 45px;
  padding: 0px 15px;
  right: 0px;

  &:hover {
    background: #272727;
  }

  @media (max-width: 768px) {
    padding: 0px 10px;

    .hideOnSmall {
      display: none;
    }
  }
`

export const Connecting = styled.div`
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

  -webkit-text-fill-color: #af0060;
  animation-name: blink;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`
