import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { MenuInfo } from 'rc-menu/lib/interface'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'src/components/atoms/Svgs/tsx/Hamburger'
import { NavMenu, NavMenuItem } from './../../atoms/Navigation/index'
import { useEffectAsync } from 'src/fixtures/utility'
import { ButtonXs } from 'src/components/organisms/Incubator/Typography'

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
    pathname: '/create'
  },
  {
    key: 'governance',
    label: 'Govern',
    pathname: '/gov'
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
    key: 'incubator',
    label: 'Incubator',
    pathname: '/incubator'
  }
]

const IncubatorContainer = styled(NavMenuItem)`
  color: white;
  background: linear-gradient(180deg, #00d0fd 0%, #5b8bf5 15.62%, #d500e6 45.83%, #ff3815 95.83%);
  :hover {
    color: white;
  }
`

const toKey = (_pathname: string) => Navigations.find(({ pathname }) => pathname === _pathname)?.key

export const Navigation = ({ handleMenuOpen }: NavigationProps) => {
  const router = useRouter()
  const [current, setCurrent] = useState(toKey(router?.pathname || Navigations[0].key)) // || Navigations[0].key
  const [isDesktop, setDesktop] = useState(typeof window !== 'undefined' && window?.innerWidth > 1400)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1400)
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

  const filteredNavigations = Navigations.filter(
    navigation => navigation.pathname !== '/profile' && navigation.pathname !== '/incubator'
  )

  return (
    <>
      {isDesktop && (
        <NavMenu
          style={{ background: 'black' }}
          theme="dark"
          onClick={handleClick}
          selectedKeys={[current || '']}
          mode="horizontal"
        >
          {filteredNavigations.map(nav => (
            <NavMenuItem key={nav.key}>
              <Link href={nav.pathname}>
                <a style={{ display: 'block', width: 'auto', fontSize: '0.8em' }}>{nav.label}</a>
              </Link>
            </NavMenuItem>
          ))}

          <IncubatorContainer key={'/inubator'}>
            <Link href="/incubator">
              <div style={{ transform: 'translateY(-2px)' }}>
                <ButtonXs color="white">incubator</ButtonXs>
              </div>
            </Link>

            {/* <a style={{ display: 'block', width: 'auto', fontSize: '0.8em' }}>incubator</a> */}
          </IncubatorContainer>
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
