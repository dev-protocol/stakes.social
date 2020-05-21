import React from 'react'
import { Header } from '../Header'
import { Button } from 'antd'
import { Headline } from 'src/components/atoms/Headline'
import { H1 } from 'src/components/atoms/Typography'
import { A } from 'src/components/atoms/A'

export const MainHeader = () => {
  return (
    <>
      <Header />
      <Headline>
        <H1>Make a community sustainable together</H1>
        {A({ href: '/how-it-works' })(
          <Button type="primary" size="large">
            How it works
          </Button>
        )}
      </Headline>
    </>
  )
}
