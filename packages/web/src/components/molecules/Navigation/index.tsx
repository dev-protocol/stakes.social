import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { MenuInfo } from 'rc-menu/lib/interface'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'src/components/atoms/Svgs/tsx/Hamburger'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import { UserOutlined } from '@ant-design/icons'
import { NavMenu, AccountBtn, Connecting, NavMenuItem } from './../../atoms/Navigation/index'

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

const toKey = (_pathname: string) => navs.find(({ pathname }) => pathname === _pathname)?.key

export const Navigation = ({ handleMenuOpen }: NavigationProps) => {
  const router = useRouter()
  const [current, setCurrent] = useState(toKey(router?.pathname) || navs[0].key)
  const [isDesktop, setDesktop] = useState(typeof window !== 'undefined' && window?.innerWidth > 1024)
  const { isConnected, connect, isConnecting } = useConnectWallet()

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
    (e: MenuInfo) => {
      const { key } = e
      setCurrent(String(key))
    },
    [setCurrent]
  )

  const accountBtnClick = () => {
    if (isConnected) {
      router.push({ pathname: `${navItemAccount.pathname}` })
      setCurrent(navItemAccount.key)
      return
    }

    connect()
  }

  return (
    <>
      {isDesktop && (
        <NavMenu theme="dark" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          {navs.map(nav => (
            <NavMenuItem color="deeppink" key={nav.key}>
              <Link href={nav.pathname}>{nav.label}</Link>
            </NavMenuItem>
          ))}
        </NavMenu>
      )}
      {!isDesktop && (
        <Hamburger style={{ marginRight: '0.5em' }} onClick={() => handleMenuOpen(prevMenuOpen => !prevMenuOpen)} />
      )}

      {
        <AccountBtn onClick={accountBtnClick}>
          {isConnecting ? (
            <Connecting>{'Connecting...'}</Connecting>
          ) : !isConnected ? (
            'SignIn'
          ) : (
            <Fragment>
              <UserOutlined />
              <span className="hideOnSmall"> {'Profile'} </span>
            </Fragment>
          )}
        </AccountBtn>
      }
    </>
  )
}
