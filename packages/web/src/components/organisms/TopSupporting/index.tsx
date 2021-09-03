import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useListTopSupportingAccountQuery, useGetPropertyAuthenticationQuery } from '@dev/graphql'
import Link from 'next/link'
import { useGetProperty, useGetPropertySettingsByAccount } from 'src/fixtures/dev-for-apps/hooks'
import { AvatarProperty } from 'src/components/molecules/AvatarProperty'
import { Spin } from 'antd'

type Props = {
  accountAddress: string
}

const TopSupportingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const SupportSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 1em 2em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  width: 180px;
  height: 180px;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    margin-right: 0.5em;
    margin-bottom: 1em;
    width: 160px;
  }
`

const AccountAddress = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
`

const Support = ({ propertyAddress, value }: { propertyAddress: string; value: number }) => {
  const { data: propertyData } = useGetProperty(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({
    variables: {
      propertyAddress
    }
  })

  const propertyTitle = data?.property_authentication?.[0]?.authentication_id

  return (
    <>
      <Link href={`/${propertyAddress}`} passHref>
        <SupportSection>
          <AvatarProperty size={'100'} propertyAddress={propertyAddress} />
          <AccountAddress>{propertyData?.name || propertyTitle || propertyAddress}</AccountAddress>
          <span>{`${(value / Math.pow(10, 18)).toFixed(0)}`}</span>
        </SupportSection>
      </Link>
    </>
  )
}

const TopSupporting = ({ accountAddress }: Props) => {
  const { data: incognitoSettings } = useGetPropertySettingsByAccount(accountAddress)
  const incognitoPropertyAddresses = useMemo(() => {
    return incognitoSettings?.filter(x => x.private_staking).map(x => x.property_address) || []
  }, [incognitoSettings])
  const { data, loading } = useListTopSupportingAccountQuery({
    variables: {
      account_address: accountAddress,
      notin_property_addresses: incognitoPropertyAddresses,
      limit: 5
    }
  })

  const filteredTopSupportingAccount = useMemo(() => {
    return data?.account_lockup.filter(x => !incognitoPropertyAddresses.includes(x.property_address)) || []
  }, [data, incognitoPropertyAddresses])

  return (
    <div>
      {!loading && filteredTopSupportingAccount.length === 0 && <div>This author doesnt support other projects</div>}
      {loading && <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />}
      <TopSupportingContainer>
        {data?.account_lockup &&
          filteredTopSupportingAccount.map(({ property_address, value }) => (
            <Support key={property_address} propertyAddress={property_address} value={value} />
          ))}
      </TopSupportingContainer>
    </div>
  )
}

export default TopSupporting
