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
      title: 'Sample Confirm Modal',
      icon: <ExclamationCircleOutlined />,
      content: 'message message....',
      onOk: () => {},
      onCancel: () => {}
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
