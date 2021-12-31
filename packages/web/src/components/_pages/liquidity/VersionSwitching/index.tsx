import React from 'react'
import styled from 'styled-components'
import { Radio, RadioChangeEvent } from 'antd'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Caption = styled.div`
  margin-bottom: 0.625rem;
`

export const VersionSwitching = () => {
  const router = useRouter()
  const version = router.query.version
  console.log({ version })

  const switchVersion = (targetVersion: string, currentVersion: any) => {
    if (targetVersion === currentVersion) return
    router.push(`/ethereum/liquidity/${targetVersion}`)
    return
  }

  return version ? (
    <>
      <Caption>Version Switching</Caption>
      <Wrapper>
        <Radio.Group
          name="version"
          defaultValue={version === 'v1' ? 'v1' : 'v2'}
          buttonStyle="solid"
          size="large"
          onChange={(e: RadioChangeEvent) => switchVersion(e.target.value, version)}
        >
          <Radio.Button value="v2">V2</Radio.Button>
          <Radio.Button value="v1">V1</Radio.Button>
        </Radio.Group>
      </Wrapper>
    </>
  ) : (
    <></>
  )
}
