import React, { useMemo } from 'react'
import { CircleGraph } from 'src/components/atoms/CircleGraph'
import { useStakingShare } from 'src/fixtures/dev-kit/hooks'
import { useGetPropertytInformation } from 'src/fixtures/devprtcl/hooks'
import styled from 'styled-components'
import { ExportOutlined } from '@ant-design/icons'

interface Props {
  className?: string
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
`
const OutlinesWrap = styled(Wrap)`
  grid-gap: 1.5rem;
  align-content: baseline;
`
const AssetStrengthWrap = styled(Wrap)`
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 1rem;
  grid-auto-columns: 0.5fr auto;
`
const AssetStrengthValue = styled.span`
  font-size: 2rem;
  color: black;
`

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const KarmaBadge = styled.div`
  padding: 5px;
  margin-right: 5px;
  border-radius: 9px;
  box-shadow: 0 2px 1.5px -1.5px black;
  border: 1px solid lightgray;
`

const Account = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AuthorAddress = styled.span`
  border-bottom: transparent;
  :hover {
    cursor: pointer;
    border-bottom: 1px solid lightgrey;
    transition: 0.2s ease-in;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const EtherscanLink = styled.a`
  text-decoration: none;
  margin-right: 5px;
`

const AssetStrengthBase = ({ assetStrength }: { assetStrength: number }) => (
  <AssetStrengthWrap>
    <CircleGraph percentage={assetStrength} />
    <div>
      <AssetStrengthValue>{Math.round(assetStrength * 100)}%</AssetStrengthValue>
    </div>
  </AssetStrengthWrap>
)

const AssetStrength = ({ property }: { property: string }) => {
  const { stakingShare: maybeAssetStrength } = useStakingShare(property)
  const assetStrength = useMemo(() => maybeAssetStrength || 0, [maybeAssetStrength])
  return <AssetStrengthBase assetStrength={assetStrength} />
}

const Author = ({ propertyAddress }: { propertyAddress: string }) => {
  const { data, error } = useGetPropertytInformation(propertyAddress)

  return (
    <AuthorContainer>
      {data && (
        <>
          <h2>Author</h2>
          <Account>
            <span>{data?.name}</span>
            <KarmaBadge>{data?.author?.karma}</KarmaBadge>
          </Account>

          <Flex>
            <AuthorAddress>
              <EtherscanLink
                href={`https://etherscan.io/address/${data?.author?.address}`}
                rel="noreferrer"
                target="_blank"
              >
                {data?.author?.address}
              </EtherscanLink>
            </AuthorAddress>
            <ExportOutlined color="grey" />
          </Flex>
        </>
      )}

      {!data && !error && (
        <>
          <div>Author</div>
          <div>Loading...</div>
        </>
      )}

      {error && (
        <>
          <div>Author</div>
          <div>Cannot load: {error.message}</div>
        </>
      )}
    </AuthorContainer>
  )
}

export const AssetOutline = ({ className, propertyAddress }: Props) => {
  return (
    <OutlinesWrap className={className}>
      <Author propertyAddress={propertyAddress} />
      <div>
        <p>Staking Ratio</p>
        <AssetStrength property={propertyAddress} />
      </div>
    </OutlinesWrap>
  )
}
