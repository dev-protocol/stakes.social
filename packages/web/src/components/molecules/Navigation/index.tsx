import React, { useState, useCallback } from 'react'
import { MenuInfo } from 'rc-menu/lib/interface'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'src/components/atoms/Svgs/tsx/Hamburger'
import { NavMenu, NavMenuItem } from './../../atoms/Navigation/index'
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
    pathname: '/liquidity/v2'
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/create'
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    pathname: '/stats'
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    pathname: '/profile'
  },
  {
    key: 'grants',
    label: 'Grants',
    pathname: 'https://devprotocol.notion.site/Welcome-to-DEV-DAPP-STARTER-GRANTS-5cb95252f18540258111581ea54d8808'
  }
]

const toKey = (_pathname: string) => Navigations.find(({ pathname }) => pathname === _pathname)?.key

export const Navigation = ({ handleMenuOpen }: NavigationProps) => {
  const router = useRouter()
  const [current, setCurrent] = useState(toKey(router?.asPath || Navigations[0].key)) // || Navigations[0].key
  const [isDesktop, setDesktop] = useState(typeof window !== 'undefined' && window?.innerWidth > 1070)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1070)
  }

  useEffectAsync(async () => {
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

  return (
    <>
      {isDesktop && (
        <NavMenu
          style={{ background: 'black', paddingRight: '5rem' }}
          theme="dark"
          onClick={handleClick}
          selectedKeys={[current || '']}
          mode="horizontal"
        >
          {Navigations.map(nav => (
            <NavMenuItem key={nav.key} style={{ margin: '0' }}>
              <Link href={nav.pathname}>
                <a style={{ display: 'block', width: 'auto', fontSize: '0.8em' }}>{nav.label}</a>
              </Link>
            </NavMenuItem>
          ))}
        </NavMenu>
      )}
      {!isDesktop && (
        <Hamburger
          style={{ marginRight: '0.5em', cursor: 'pointer' }}
          onClick={() => handleMenuOpen(prevMenuOpen => !prevMenuOpen)}
        />
      )}
    </>
  )
}
