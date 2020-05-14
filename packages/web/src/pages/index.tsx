import React, { useMemo } from 'react'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'
import { MainHeader } from 'src/components/organisms/MainHeader'
import { Footer } from 'src/components/organisms/Footer'
import { Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const { confirm } = Modal

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  const router = useRouter()
  const page = useMemo(() => {
    const { page: pageStr } = router.query
    if (typeof pageStr === 'string') {
      return parseInt(pageStr)
    }
    return 1
  }, [router])

  const onClick = () => {
    confirm({
      title: 'Create a new Property',
      icon: <ExclamationCircleOutlined />,
      content: (
        <>
          <p>
            Stakes.social do not yet support the creation of a new Property, but you can create them manually by using
            Etherscan.
          </p>
          <p>Do you want to read a guide blog?</p>
        </>
      ),
      onOk: () => {
        window.open(
          'https://medium.com/devprtcl/how-to-register-your-npm-packages-to-dev-protocol-23571c377a12',
          '_blank'
        )
      }
    })
  }

  return (
    <>
      <MainHeader />
      <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Button onClick={onClick} style={{ display: 'block', margin: '32px 0 32px auto' }}>
          Create a new Property
        </Button>
        <PropertyCardList currentPage={page} />
      </div>
      <Footer />
    </>
  )
}

export default Index
