import React, { useMemo, useState } from 'react'
import { Input, Radio, Space } from 'antd'
import styled from 'styled-components'
import { Max } from 'src/components/molecules/Max'
import { SearchProps } from 'antd/lib/input'
import { ButtonWithGradient } from 'src/components/atoms/ButtonWithGradient'
import { PositionText } from './PositionText'

type Props = SearchProps &
  React.RefAttributes<Input> & {
    onClickMax?: () => void
  }

const StyledForm = styled(Input.Search)`
  width: inherit;
  bottom: 0;
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    outline: 0;
    -webkit-box-shadow: none;
  }
  .ant-input-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .ant-input-group-addon,
  .ant-btn {
    width: 100%;
  }
  .ant-input-affix-wrapper,
  .ant-input-search,
  .ant-btn {
    border: ${props => (props.id === 'withdraw' ? '2px solid #5B5B5B' : '2px solid #2f80ed')};
  }
  .ant-input-search {
    border-right: 0;
  }
  .ant-input-group-addon {
    .ant-btn {
      border-left: 0;
      height: 100%;
      font-size: 1.2rem;
      background-image: ${props =>
        props.id === 'withdraw'
          ? 'linear-gradient(to right, #5B5B5B, #2A2A2A)'
          : 'linear-gradient(to right, #2f80ed, #1ac9fc)'};
    }
  }
  input {
    font-size: 1.6rem;
  }
`

const Wrap = styled.div`
  display: grid;
`

const StyledButtonWithGradient = styled(ButtonWithGradient)`
  font-size: 1.6rem;
  height: 100%;
`
const StyledButtonWithGradientForWithdraw = styled(ButtonWithGradient)`
  font-size: 1.6rem;
  height: 100%;
  &,
  &:hover,
  &:active,
  &:focus {
    background-image: linear-gradient(to right, #5b5b5b, #2a2a2a);
  }
`

export const TransactForm = ({
  className,
  enterButton,
  value,
  onChange,
  onSearch,
  suffix: _suffix,
  onClickMax,
  disabled,
  id,
  placeholder
}: Props) => {
  const onClick = useMemo(() => (onSearch ? () => onSearch('') : () => undefined), [onSearch])
  const suffix = useMemo(
    () => (
      <>
        {_suffix}
        {onClickMax ? <Max onClick={onClickMax} /> : undefined}
      </>
    ),
    [_suffix, onClickMax]
  )
  const OnlyButton = useMemo(
    () =>
      id === 'withdraw' ? (
        <StyledButtonWithGradientForWithdraw size="large" onClick={onClick}>
          {enterButton}
        </StyledButtonWithGradientForWithdraw>
      ) : (
        <StyledButtonWithGradient size="large" onClick={onClick}>
          {enterButton}
        </StyledButtonWithGradient>
      ),
    [id, onClick, enterButton]
  )
  // TODO(@k3nt0w): use (devClient).detectSTokens( PROPERTY, ACCOUNT ) after implementing it.
  const tokenIdList: number[] = [2, 6, 50] // mock value
  const [radioValue, setRadioValue] = useState(0)

  return (
    <Wrap className={className} style={{ opacity: disabled ? '0.3' : '1.0' }}>
      <Radio.Group
        onChange={event => setRadioValue(event.target.value)}
        value={radioValue}
        style={{ marginBottom: '12px' }}
      >
        <Space direction="vertical">
          {id === 'stake' && (
            <Radio value={-1}>
              <span style={{ marginLeft: '12px' }}>New position</span>
            </Radio>
          )}
          {tokenIdList.map((tokenId, idx) => (
            <Radio value={idx} key={idx}>
              <PositionText tokenId={tokenId} />
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      {onChange ? (
        <StyledForm
          id={id}
          enterButton={enterButton}
          size="large"
          value={value}
          onChange={onChange}
          onSearch={onSearch}
          disabled={disabled}
          suffix={suffix}
          type="number"
          placeholder={placeholder}
        />
      ) : (
        OnlyButton
      )}
    </Wrap>
  )
}
