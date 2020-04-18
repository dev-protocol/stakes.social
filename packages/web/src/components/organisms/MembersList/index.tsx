import React from 'react'
import { Member } from './Member'

interface Props {
  membersList: {
    propertyAddress: string
    percentage: number
  }[]
}

export const MembersList = ({ membersList }: Props) => {
  return (
    <div>
      <div style={{ fontSize: '18px', lineHeight: '24px', margin: '0 0 32px 0' }}>Members</div>
      <div>
        {membersList.map(({ propertyAddress, percentage }) => (
          <Member key={propertyAddress} propertyAddress={propertyAddress} percentage={percentage} />
        ))}
      </div>
    </div>
  )
}
