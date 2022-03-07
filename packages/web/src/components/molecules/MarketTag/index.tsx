import React, { useMemo } from 'react'
import { Tag } from 'antd'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'

const marketAddresses = {
  eth: {
    main: {
      github: '0x34A7AdC94C4D41C3e3469F98033B372cB2fAf318'
    },
    ropsten: {
      github: '0x1A45BA7BB4a5A4a01Eb5330C9F2fd8af47C16eBe'
    }
  },
  arbitrum: {
    one: {
      github: '0x84b9e407e2Ee76A641b45d007bBFd9e60a13FF7d',
      youtube: '0x61999A2F3f403957315255D08A969602f19F2Dcf',
      discord: '0x0f02e7c1bc8769B56B20E03d2Fe277b42194C260'
    },
    rinkeby: {
      github: '0xeb85170bce4ea8a9ca0fb5b6620ab74ef111a50c',
      youtube: '0x53f8A1DEe0aF272d995aF1e206116172c00f2eb4',
      discord: '0xC3af4341f71EfD7F74523D4cD9eD87F36Ed75A99'
    }
  },
  polygon: {
    mainnet: {
      github: '0xa7d0A25Cb2378c935FF94863C8614367b9e85Ed8',
      youtube: '0xfe607787e14A90A320cdfc05710b382380B4fd12',
      discord: '0x75b2C22E5f1EF64814D574caa9c4506Eba268502'
    },
    mumbai: {
      github: '0x9edc758B0477559AB6556BCA9971B4DD892d8E28',
      youtube: '0x7C7CDc82b195d4dcf9a789BD14CD1C73232025a8',
      discord: '0xb5A7CFb9F495De44e58177990dac004b84e7C501'
    }
  }
}

export const MarketTag = ({ market }: { market?: string }) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name } = useDetectChain(nonConnectedEthersProvider)

  const marketName = useMemo(() => {
    if (market === undefined) {
      return undefined
    }
    const markets: any =
      name === 'arbitrum-one'
        ? marketAddresses.arbitrum.one
        : name === 'arbitrum-rinkeby'
        ? marketAddresses.arbitrum.rinkeby
        : name === 'polygon'
        ? marketAddresses.polygon.mainnet
        : name === 'polygon-mumbai'
        ? marketAddresses.polygon.mumbai
        : undefined
    if (market === undefined) {
      return undefined
    }
    return markets?.github === market
      ? 'GitHub'
      : markets?.youtube === market
      ? 'YouTube'
      : markets?.discord === market
      ? 'Discord'
      : undefined
  }, [market, name])

  return marketName ? (
    <Tag
      color={
        marketName === 'GitHub'
          ? '#333'
          : marketName === 'YouTube'
          ? '#ff0000'
          : marketName === 'Discord'
          ? '#7289da'
          : ''
      }
    >
      {marketName}
    </Tag>
  ) : (
    <></>
  )
}
