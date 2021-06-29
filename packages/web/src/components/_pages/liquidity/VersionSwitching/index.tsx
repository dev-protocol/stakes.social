import React from 'react'
import styled from 'styled-components'
import { Radio, RadioChangeEvent } from 'antd'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Caption = styled.div`
  margin-bottom: 0.3125rem;
`

const Description = styled.div`
  margin-bottom: 0.625rem;
  font-size: 0.75rem;
`

export const VersionSwitching = () => {
  const router = useRouter()
  const { version } = router.query

  const switchVersion = (targetVersion: string, currentVersion: any) => {
    if (targetVersion === currentVersion) return
    router.push(`/liquidity/${targetVersion}`)
    return
  }

  return (
    <>
      <Caption>Version Switching</Caption>
      <Description>The liquidity program for v1 has already ended</Description>
      <Wrapper>
        <Radio.Group
          name="version"
          defaultValue="v2"
          buttonStyle="solid"
          size="large"
          onChange={(e: RadioChangeEvent) => switchVersion(e.target.value, version)}
        >
          <Radio.Button value="v2">V2</Radio.Button>
          <Radio.Button value="v1">V1</Radio.Button>
        </Radio.Group>
      </Wrapper>
    </>
  )
}
