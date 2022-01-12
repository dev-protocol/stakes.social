import { NextRouter } from 'next/router'
import { ChainName } from 'src/fixtures/wallet/utility'
import { SPLITTER } from './index'

export const destination = (router: NextRouter, network: ChainName) => {
  const index = router.pathname.split(SPLITTER).findIndex(x => x === '[network]')
  const replaced =
    index > -1
      ? router.asPath
          .split(SPLITTER)
          .map((v, i) => {
            return i === index ? network : v
          })
          .join(SPLITTER)
      : `/${network}${router.asPath}`
  return replaced
}
