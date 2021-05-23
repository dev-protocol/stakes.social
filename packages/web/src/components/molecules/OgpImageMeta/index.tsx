import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getPath } from 'src/fixtures/utility/route'

const OgpImageMeta = () => {
  const [urlPathArg] = getPath(useRouter().asPath)
  const propertyAddress = urlPathArg.split('?')[0]
  const ogImageUrl = `https://ogp-image-vercel.vercel.app/${propertyAddress}`
  return (
    <Head>
      <meta property="og:image" content={ogImageUrl} />
    </Head>
  )
}

export default OgpImageMeta
