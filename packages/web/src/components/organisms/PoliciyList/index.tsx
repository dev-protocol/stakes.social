import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { List, Spin } from 'antd'
import CopyOutlined from '@ant-design/icons/CopyOutlined'
import { H3 } from 'src/components/atoms/Typography'
import { useGetPolicyAddressesList } from 'src/fixtures/dev-kit/hooks'
import { useGetPolicyInformation } from 'src/fixtures/github/hooks'
import { NotFound } from './NotFound'

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const ListWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 50%;
  }
`

const Title = (props: { policyAddress: string }) => {
  const { data } = useGetPolicyInformation(props.policyAddress)
  return <H3>{data?.name}</H3>
}

const Description = (props: { policyAddress: string }) => {
  const { data } = useGetPolicyInformation(props.policyAddress)
  return <>{data?.description}</>
}

export const PoliciesList = () => {
  const [policyAddressesList, setPolicyAddressesList] = useState<string[]>([])
  const { getPolicyAddressesList, isLoading } = useGetPolicyAddressesList()
  useEffect(() => {
    getPolicyAddressesList().then(policyAddress => {
      policyAddress && setPolicyAddressesList([...policyAddress])
    })
  }, [getPolicyAddressesList])
  return (
    <Wrap>
      {policyAddressesList.length > 0 ? (
        <ListWrap>
          <List
            bordered
            itemLayout="horizontal"
            dataSource={policyAddressesList}
            renderItem={policyAddress => (
              <List.Item>
                <List.Item.Meta
                  avatar={<CopyOutlined style={{ marginTop: '16px', fontSize: '28px' }} />}
                  title={<Title policyAddress={policyAddress} />}
                  description={<Description policyAddress={policyAddress} />}
                />
              </List.Item>
            )}
          />
        </ListWrap>
      ) : isLoading ? (
        <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />
      ) : (
        <NotFound />
      )}
    </Wrap>
  )
}
