import React from 'react'
import { Tabs } from 'antd'
import styled from 'styled-components'

type Props = {
  onChange: (activeKey: string) => void
  contents: ReadonlyArray<{
    name: string
    node: React.ReactNode
  }>
}

const StyledTabs = styled(Tabs)`
  overflow: visible;
`

const Contents = styled.div`
  margin: 2rem 0;
`

export const Nav = ({ onChange, contents }: Props) => {
  const { TabPane } = Tabs

  return (
    <StyledTabs defaultActiveKey="0" onChange={onChange}>
      {contents.map(({ name, node }, i) => (
        <TabPane tab={name} key={i}>
          <Contents>{node}</Contents>
        </TabPane>
      ))}
    </StyledTabs>
  )
}
