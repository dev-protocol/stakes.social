import React from 'react'
import styled from 'styled-components'
import { NotFound } from './NotFound'
import { List } from 'antd'
import CopyOutlined from '@ant-design/icons/CopyOutlined'
import { H3 } from 'src/components/atoms/Typography'

interface Policy {
  title: string
  description: string
}

interface Props {
  policyList: Policy[]
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export const PoliciesList = ({ policyList }: Props) => {
  return (
    <Wrap>
      {policyList.length > 0 ? (
        <div style={{ width: '50%', margin: '0 auto' }}>
          <List
            bordered
            itemLayout="horizontal"
            dataSource={policyList}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<CopyOutlined style={{ marginTop: '16px', fontSize: '28px' }} />}
                  title={<H3>{item.title}</H3>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      ) : (
        <NotFound />
      )}
    </Wrap>
  )
}
