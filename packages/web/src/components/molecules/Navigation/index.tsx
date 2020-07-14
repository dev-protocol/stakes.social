import React from 'react'
import { Menu } from 'antd'
import { useState } from 'react'
import { useCallback } from 'react'
import { ClickParam } from 'antd/lib/menu'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const navs = [
  {
    key: 'properties',
    label: 'Propertis',
    pathname: '/'
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/auth'
  }
]
const NavMenu = styled(Menu)`
  background: transparent;
`

const toPathname = (_key: string) => navs.find(({ key }) => key === _key)?.pathname
const toKey = (_pathname: string) => navs.find(({ pathname }) => pathname === _pathname)?.key

export const Navigation = () => {
  const router = useRouter()
  const [current, setCurrent] = useState(toKey(router?.pathname) || navs[0].key)
  const handleClick = useCallback(
    (e: ClickParam) => {
      const { key } = e
      const pathname = toPathname(key)
      setCurrent(key)
      pathname && router.push(pathname)
    },
    [setCurrent, router]
  )

  return (
    <NavMenu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {navs.map(nav => (
        <NavMenu.Item key={nav.key}>{nav.label}</NavMenu.Item>
      ))}
    </NavMenu>
  )
}
