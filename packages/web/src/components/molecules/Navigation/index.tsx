import React from 'react'
import { Menu } from 'antd'
import { useState } from 'react'
import { useCallback } from 'react'
import { ClickParam } from 'antd/lib/menu'
import { useRouter } from 'next/router'

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

const toPathname = (_key: string) => navs.find(({ key }) => key === _key)?.pathname
const toKey = (_pathname: string) => navs.find(({ pathname }) => pathname === _pathname)?.key

export const Navigation = () => {
  const router = useRouter()
  const [current, setCurrent] = useState(toKey(router.pathname) || navs[0].key)
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
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {navs.map(nav => (
        <Menu.Item key={nav.key}>{nav.label}</Menu.Item>
      ))}
    </Menu>
  )
}
