import React from 'react'
import 'antd/dist/antd.css'
import { Tabs } from 'antd'
import { Stake } from 'src/components/organisms/Stake'

const { TabPane } = Tabs

export const PropertyStats = ({ propertyAddress }: { propertyAddress: string }) => (
  <Tabs defaultActiveKey="1" type="card">
    <TabPane tab="Overview" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Stake" key="2">
      <Stake title="Stake" propertyAddress={propertyAddress} />
    </TabPane>
  </Tabs>
)
