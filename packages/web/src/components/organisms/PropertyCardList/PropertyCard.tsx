import React, { useCallback, useEffect, useState } from 'react'
import {
  useGetTotalStakingAmount,
  useGetTotalRewardsAmount,
  usePropertyAuthor,
  usePropertyName,
  useDetectSTokens
} from 'src/fixtures/dev-kit/hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useGetProperty, useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { Avatar, AvatarPlaceholder } from 'src/components/molecules/Avatar'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'
import truncateEthAddress from 'truncate-eth-address'
import { UserOutlined } from '@ant-design/icons'
import { UndefinedOr, whenDefined } from '@devprotocol/util-ts'
import { getStokenOwnerOf } from 'src/fixtures/dev-kit/client'
import { getAccount } from 'src/fixtures/dev-for-apps/utility'

interface Props {
  propertyAddress: string
  assets: (string | undefined)[]
}

const formatter = new Intl.NumberFormat('en-US')

export const PropertyCard = ({ propertyAddress, assets }: Props) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount, currency: totalRewardsAmountCurrency } = useGetTotalRewardsAmount(propertyAddress)
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const { data: dataAuthor } = useGetAccount(authorAddress)
  const { data: dataProperty } = useGetProperty(propertyAddress)
  const { name: propertyName } = usePropertyName(propertyAddress)
  const { sTokensByPropertyAddress }: { sTokensByPropertyAddress: number[] | undefined } =
    useDetectSTokens(propertyAddress)
  const [stakerAddresses, setStakerAddresses] = useState<{ name: UndefinedOr<string>; address: string }[]>([])

  const fetchStakers = useCallback(
    async (sTokenId: number) => {
      const address = await whenDefined(nonConnectedEthersProvider, client => getStokenOwnerOf(client, sTokenId))
      if (!address) {
        return
      }
      const account = await getAccount(address)

      const exists = stakerAddresses.find(staker => staker.address)
      if (!exists) {
        setStakerAddresses(addresses => [...addresses, { address, name: account[0]?.name }])
      }
    },
    [nonConnectedEthersProvider, setStakerAddresses, stakerAddresses]
  )

  useEffect(() => {
    if (!sTokensByPropertyAddress) {
      return
    }

    const latestStakers = sTokensByPropertyAddress.slice(0, 3)

    latestStakers.forEach(id => fetchStakers(id))
  }, [sTokensByPropertyAddress, fetchStakers])

  return (
    <div className="border border-gray-300 rounded-sm cursor-pointer flex">
      <LinkWithNetwork href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
        <div className="flex flex-col justify-between max-w-full">
          <div className="py-8 px-4">
            <div className="flex items-center mb-4">
              <div>
                <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
                  {dataProperty && dataProperty.avatar && <img className="w-full" src={dataProperty.avatar.url} />}
                  {!dataProperty || (dataProperty && !dataProperty.avatar && <AvatarPlaceholder size="96" />)}
                </div>
              </div>

              <div className="text-2xl ml-4 font-syne truncate">{assets || propertyName || 'Property'}</div>
            </div>

            <div className="flex items-center mb-4">
              <Avatar accountAddress={authorAddress} size={'42'} />
              <span className="ml-4">{dataAuthor?.name || truncateEthAddress(authorAddress ?? '')}</span>
            </div>

            <div className="text-ellipsis overflow-hidden line-clamp-4 text-lg">
              {dataProperty?.description ||
                'Stake DEV tokens to provide funding for OSS projects so that they can maintain development.'}
            </div>

            <div className="flex"></div>
          </div>
          <div>
            <div className="py-6 px-4 border-t font-bold font-syne flex">
              <div className="flex items-center">
                <UserOutlined className="text-gray-400 mr-1" />
                <span>
                  {totalStakingAmount?.dp(0).toNumber() ? formatter.format(totalStakingAmount?.dp(0).toNumber()) : 0}{' '}
                  {totalStakingAmountCurrency} Staking
                </span>
              </div>
              <div className="flex items-center ml-4">
                <UserOutlined className="text-gray-400 mr-1" />
                <span>
                  {totalRewardsAmount?.dp(0)?.toNumber() ? formatter.format(totalRewardsAmount?.dp(0).toNumber()) : 0}{' '}
                  {totalRewardsAmountCurrency} Rewards
                </span>
              </div>
            </div>
            {stakerAddresses.length > 0 && (
              <div className="py-4 px-4 border-t font-syne flex">
                {stakerAddresses.map(staker => (
                  <div className="flex mr-2 items-center" key={`${propertyAddress}-${staker.address}`}>
                    <Avatar accountAddress={staker.address} size={'42'} />
                    <span className="ml-4">{(staker.name ?? staker.address).substring(0, 4)}...</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </LinkWithNetwork>
    </div>
  )
}
