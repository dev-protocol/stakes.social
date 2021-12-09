import React from 'react'
import 'antd/dist/antd.css'
import { Tabs } from 'antd'

const { TabPane } = Tabs

export const PropertyStats = () => (
  <Tabs defaultActiveKey="1" type="card" size="large">
    <TabPane tab="Overview" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Stake" key="2">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
)
