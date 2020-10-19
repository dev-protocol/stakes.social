import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { ClickParam } from 'antd/lib/menu'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'src/components/atoms/Svgs/tsx/Hamburger'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import { UserOutlined } from '@ant-design/icons'
import { NavMenu, AccountBtn, Connecting, NavMenuItem } from './../../atoms/Navigation/index'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Fortmatic from 'fortmatic'

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
  // const { isConnected, connect, isConnecting } = useConnectWallet()
  const { isConnected, isConnecting } = useConnectWallet()

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

  const accountBtnClick = async () => {
    if (isConnected) {
      router.push({ pathname: `${navItemAccount.pathname}` })
      setCurrent(navItemAccount.key)
      return
    }

    // connect()

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: 'xxx7'
        }
      },
      fortmatic: {
        package: Fortmatic,
        options: {
          key: 'pk_test_C2D8B82458A36749'
        }
      }
    }
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions
    })
    const provider = await web3Modal.connect()
    const web3: any = new Web3(provider)
    console.log(web3.eth.getAccounts())
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
