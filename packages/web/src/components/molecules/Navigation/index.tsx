import React, { useEffect } from 'react'
import { Menu } from 'antd'
import { useState } from 'react'
import { useCallback } from 'react'
import { ClickParam } from 'antd/lib/menu'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import Hamburger from 'src/components/atoms/Svgs/tsx/Hamburger'

interface NavigationProps {
  isMenuOpen: boolean
  handleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const navs = [
  {
    key: 'properties',
    label: 'Properties',
    pathname: '/'
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/auth'
  },
  {
    key: 'governance',
    label: 'Governance',
    pathname: '/policy'
  },
  {
    key: 'account',
    label: 'Account',
    pathname: '/settings/profile'
  }
]
const NavMenu = styled(Menu)`
  background: transparent;
  color: white;
`
const NavMenuItem = styled(NavMenu.Item)`
  background-color: black;
  a.link:hover {
    background-color: yellow;
  }
`

const toKey = (_pathname: string) => navs.find(({ pathname }) => pathname === _pathname)?.key

export const Navigation = ({ handleMenuOpen }: NavigationProps) => {
  const router = useRouter()
  const [current, setCurrent] = useState(toKey(router?.pathname) || navs[0].key)
  const [isDesktop, setDesktop] = useState(typeof window !== 'undefined' && window?.innerWidth > 1024)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateMedia)
      return () => window.removeEventListener('resize', updateMedia)
    }
  }, [])

  const handleClick = useCallback(
    (e: ClickParam) => {
      const { key } = e
      setCurrent(key)
    },
    [setCurrent]
  )

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
    </>
  )
}
