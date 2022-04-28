import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_ID } from '../lib/gtag'

export default class extends Document {
  static getInitialProps = async ({ renderPage }: DocumentContext) => {
    const sheet = new ServerStyleSheet()

    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link href="/fonts/style.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.typekit.net/owg1uzy.css" />
          <link rel="apple-touch-icon" sizes="57x57" href="//asset.stakes.social/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="//asset.stakes.social/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="//asset.stakes.social/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="//asset.stakes.social/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="//asset.stakes.social/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="//asset.stakes.social/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="//asset.stakes.social/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="//asset.stakes.social/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="//asset.stakes.social/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="//asset.stakes.social/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="//asset.stakes.social/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="//asset.stakes.social/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="//asset.stakes.social/favicon-16x16.png" />
          <link rel="manifest" href="//asset.stakes.social/manifest.json" />
          <meta name="msapplication-TileColor" content="#2F80ED" />
          <meta name="msapplication-TileImage" content="//asset.stakes.social/ms-icon-144x144.png" />
          <meta name="theme-color" content="#2F80ED" />
          {/* Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`
            }}
          />
          {/* cookieconsent */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
            type="text/css"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
            data-cfasync="false"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.addEventListener("load",async () => {
                      window.cookieconsent.initialise({
                          "palette": {
                              "popup": {
                                  "background": "#fafafa"
                              },
                              "button": {
                                  "background": "#000000",
                                  "text": "#ffffff"
                              }
                          },
                          "showLink": false,
                          "position": "bottom-right"
                      });
                  });`
            }}
          />
        </Head>
        <body className="font-syne">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
