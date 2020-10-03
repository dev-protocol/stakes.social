import React, { useEffect } from 'react'
import { Menu } from 'antd'
import { useState } from 'react'
import { useCallback } from 'react'
import { ClickParam } from 'antd/lib/menu'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import Hamburger from 'src/components/atoms/Svgs/tsx/Hamburger'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'

interface NavigationProps {
  isMenuOpen: boolean
  handleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const navs = [
  {
    key: 'pools',
    label: 'Pools',
    pathname: '/'
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/auth'
  },
  {
    key: 'governance',
    label: 'Govern',
    pathname: '/policy'
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    pathname: '/stats'
  }
]

const navItemAccount = {
  key: 'account',
  label: 'Account',
  pathname: '/settings/profile'
}

const NavMenu = styled(Menu)`
  background: transparent;
  color: white;

  .ant-menu-item-selected {
    background: -moz-linear-gradient(top, #639fff 1%, #2187ed 100%);
    background: -webkit-linear-gradient(top, #639fff 1%, #2187ed 100%);
    background: linear-gradient(to bottom, #639fff 1%, #2187ed 100%);
  }
`
const NavMenuItem = styled(NavMenu.Item)`
  background-color: black;
  a.link:hover {
    background-color: yellow;
  }
`

const LoginBtn = styled.div`
  color: deeppink;
  position: absolute;
  right: 20px;
  font-size: 1.1rem;
  height: 47px;
  cursor: pointer;
  line-height: 45px;
  background-image: linear-gradient(12deg, #ff1493, #995aff);
  -webkit-background-clip: text;
  font-weight: bold;
  -webkit-text-fill-color: transparent;

  &:hover {
    color: white;
    background-image: linear-gradient(12deg, #f8bbd0, #f52a99);
  }
`

const toKey = (_pathname: string) => navs.find(({ pathname }) => pathname === _pathname)?.key

export const Navigation = ({ handleMenuOpen }: NavigationProps) => {
  const router = useRouter()
  const [current, setCurrent] = useState(toKey(router?.pathname) || navs[0].key)
  const [isDesktop, setDesktop] = useState(typeof window !== 'undefined' && window?.innerWidth > 1024)
  const { isConnected, connect } = useConnectWallet()

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateMedia)
      return () => window.removeEventListener('resize', updateMedia)
    }
    return setDesktop(true)
  }, [])

  const handleClick = useCallback(
    (e: ClickParam) => {
      const { key } = e
      setCurrent(key)
    },
    [setCurrent]
  )

  const connectToWallet = () => {
    connect()
  }

  function renderNavitem(nav) {
    return (
      <NavMenuItem color="deeppink" key={nav.key}>
        <Link href={nav.pathname}>{nav.label}</Link>
      </NavMenuItem>
    )
  }

  return (
    <>
      {isDesktop && (
        <NavMenu theme="dark" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          {navs.map(nav => renderNavitem(nav))}
        </NavMenu>
      )}
      {!isDesktop && (
        <Hamburger style={{ marginRight: '0.5em' }} onClick={() => handleMenuOpen(prevMenuOpen => !prevMenuOpen)} />
      )}

      {!isConnected ? (
        <LoginBtn onClick={connectToWallet}>SignIn</LoginBtn>
      ) : (
        <NavMenuItem color="deeppink" key={navItemAccount.key}>
          <Link href={navItemAccount.pathname}>{navItemAccount.label}</Link>
        </NavMenuItem>
      )}
    </>
  )
}
