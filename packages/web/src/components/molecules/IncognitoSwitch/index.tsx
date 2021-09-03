import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Switch } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { useProvider } from 'src/fixtures/wallet/hooks'
import {
  useGetPropertySetting,
  useCreatePropertySetting,
  useUpdatePropertySetting
} from 'src/fixtures/dev-for-apps/hooks'

interface Props {
  propertyAddress: string
}

const InfoContainer = styled.div`
  margin-left: 20px;
  margin-right: 10px;
  svg {
    width: 1.5em;
    height: auto;
  }
`

const SubtitleContianer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IncognitoSwitch = ({ propertyAddress }: Props) => {
  const [incognitoMode, setIncognitoMode] = useState(false)
  const { accountAddress } = useProvider()
  const { postPropertySettingHandler: createHandler } = useCreatePropertySetting(propertyAddress, accountAddress || '')
  const { putPropertySettingHandler: updateHandler } = useUpdatePropertySetting(propertyAddress, accountAddress || '')
  const { data: incognitoSettings } = useGetPropertySetting(propertyAddress, accountAddress || '')

  const onChange = useCallback(() => {
    const handler = incognitoSettings?.id ? updateHandler : createHandler
    handler(!incognitoMode)
    setIncognitoMode(!incognitoMode)
  }, [createHandler, updateHandler, incognitoSettings, incognitoMode])

  useEffect(() => {
    setIncognitoMode(incognitoSettings?.private_staking || false)
  }, [incognitoSettings])

  return (
    <>
      <SubtitleContianer>
        <Switch checked={incognitoMode} onChange={onChange} />
        <InfoContainer>
          <InfoCircleOutlined />
        </InfoContainer>
        <span style={{ fontSize: '0.8em' }}>
          Incognito Staking:
          <br />
          If this is ON, your staking will be hidden from the public.
        </span>
      </SubtitleContianer>
    </>
  )
}
