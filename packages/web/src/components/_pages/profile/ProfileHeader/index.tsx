import React from 'react'
import { ButtonWithGradient } from 'src/components/atoms/ButtonWithGradient'
import { Container } from 'src/components/atoms/Container'
import { Grid } from 'src/components/atoms/Grid'
import { H1 } from 'src/components/atoms/Typography'
import { WithGradient } from 'src/components/atoms/WithGradient'
import { AvatarUser } from 'src/components/molecules/AvatarUser'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { useGetAuthorInformation } from 'src/fixtures/devprtcl/hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
import { CoverImages } from './CoverImages'
import { Links } from './Links'

interface Props {
  accountAddress: string
}

const Wrap = styled.div``

const Info = styled(Grid)`
  position: relative;
  margin-top: -20px;
  gap: 1rem;
  justify-content: start;
  align-items: center;
  grid-template-columns: 110px auto auto;
  grid-template-areas:
    'avatar name name'
    'avatar karma links'
    '. edit edit';
  @media (min-width: 768px) {
    margin-top: -60px;
    gap: 0 3rem;
    grid-template-columns: auto auto auto 1fr;
    grid-template-areas:
      'avatar name links edit'
      'avatar karma links edit';
  }
`

const AreaAvatar = styled(AvatarUser)`
  grid-area: avatar;
  img {
    box-shadow: 0 2px 3px -1px rgb(0 0 0), 0 1px 50px -1px rgba(0, 0, 0, 0.16);
  }
`
const AreaName = styled(H1)`
  grid-area: name;
  align-self: end;
  margin: 0;
  margin-top: 0.5em;
`
const AreaKarma = styled.span`
  grid-area: karma;
  align-self: start;
`
const AreaLinks = styled(Links)`
  grid-area: links;
  margin-top: -0.5em;
  @media (min-width: 768px) {
    margin: 0;
  }
`
const AreaEdit = styled(ButtonWithGradient)`
  grid-area: edit;
  @media (min-width: 768px) {
    justify-self: end;
  }
`

export const ProfileHeader = ({ accountAddress }: Props) => {
  const { accountAddress: providedAccountAddress } = useProvider()
  const { data: account } = useGetAccount(accountAddress)
  const { data: info } = useGetAuthorInformation(accountAddress)
  const isSelf = accountAddress.toLowerCase() === providedAccountAddress?.toLowerCase()

  return (
    <Wrap>
      <CoverImages images={account?.cover_images} />
      <Container>
        <Info>
          <AreaAvatar accountAddress={accountAddress} size={180} />
          <AreaName>{account?.name}</AreaName>
          <AreaKarma>
            <WithGradient>{info?.karma.toLocaleString() || 'N/A'}</WithGradient> Karma
          </AreaKarma>
          <AreaLinks links={account?.links} />
          {isSelf ? <AreaEdit href="/settings/profile">Edit</AreaEdit> : ''}
        </Info>
      </Container>
    </Wrap>
  )
}
