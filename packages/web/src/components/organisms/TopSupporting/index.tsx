import React from 'react'
import styled from 'styled-components'
import { useListTopSupportingAccountQuery, useGetPropertyAuthenticationQuery } from '@dev/graphql'
import Link from 'next/link'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'
import { AvatarProperty } from 'src/components/molecules/AvatarProperty'

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

  img {
    border-radius: 90px;
  }
`

const AccountAddress = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px;
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
    <Link href={`/${propertyAddress}`} passHref>
      <SupportSection>
        <AvatarProperty size={'100'} propertyAddress={propertyAddress} />
        <AccountAddress>{propertyData?.name || propertyTitle || propertyAddress}</AccountAddress>
        <span>{`${(value / Math.pow(10, 18)).toFixed(0)}`}</span>
      </SupportSection>
    </Link>
  )
}

const TopSupporting = ({ accountAddress }: Props) => {
  const { data, loading } = useListTopSupportingAccountQuery({
    variables: {
      account_address: accountAddress,
      limit: 5
    }
  })

  return (
    <div>
      {!loading && data?.account_lockup?.length === 0 && <div>This author doesnt support other projects</div>}
      {loading && <div>Loading...</div>}
      <TopSupportingContainer>
        {data?.account_lockup &&
          data?.account_lockup.map(({ property_address, value }) => (
            <Support key={property_address} propertyAddress={property_address} value={value} />
          ))}
      </TopSupportingContainer>
    </div>
  )
}

export default TopSupporting
