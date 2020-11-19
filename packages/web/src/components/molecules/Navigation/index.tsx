import React, { Fragment } from 'react'
import { useContext, useState } from 'react'
import { useCallback } from 'react'
import { MenuInfo } from 'rc-menu/lib/interface'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'src/components/atoms/Svgs/tsx/Hamburger'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { NavMenu, AccountBtn, Connecting, NavMenuItem } from './../../atoms/Navigation/index'
import WalletContext from 'src/context/walletContext'
import { useEffectAsync } from 'src/fixtures/utility'

interface NavigationProps {
  isMenuOpen: boolean
  handleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navigations = [
  {
    key: 'pools',
    label: 'Pools',
    pathname: '/'
  },
  {
    key: 'liquidity',
    label: 'Liquidity',
    pathname: '/liquidity'
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

const toKey = (_pathname: string) => Navigations.find(({ pathname }) => pathname === _pathname)?.key

export const Navigation = ({ handleMenuOpen }: NavigationProps) => {
  const router = useRouter()
  const [current, setCurrent] = useState(toKey(router?.pathname) || Navigations[0].key)
  const [isDesktop, setDesktop] = useState(typeof window !== 'undefined' && window?.innerWidth > 1024)
  const { isConnected, connect, isConnecting } = useConnectWallet()
  const { web3Modal } = useContext(WalletContext)
  const { accountAddress } = useProvider()

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024)
  }

  useEffectAsync(async () => {
    if (web3Modal?.cachedProvider) {
      await web3Modal.connect()
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateMedia)
      return () => window.removeEventListener('resize', updateMedia)
    }
    return setDesktop(true)
  }, [web3Modal])

  const handleClick = useCallback(
    (e: MenuInfo) => {
      const { key } = e
      setCurrent(String(key))
    },
    [setCurrent]
  )

  const accountBtnClick = async () => {
    if (isConnected || accountAddress) {
      router.push({ pathname: `${navItemAccount.pathname}` })
      setCurrent(navItemAccount.key)
      return
    }

    connect()
  }

  return (
    <>
      {isDesktop && (
        <NavMenu
          style={{ background: 'black' }}
          theme="dark"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          {Navigations.map(nav => (
            <NavMenuItem color="deeppink" key={nav.key}>
              <Link href={nav.pathname}>
                <a>{nav.label}</a>
              </Link>
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
          ) : !isConnected && !accountAddress ? (
            'Sign in'
          ) : (
            <Fragment>
              <span className="hideOnSmall"> {'Profile'} </span>
            </Fragment>
          )}
        </AccountBtn>
      }
    </>
  )
}
