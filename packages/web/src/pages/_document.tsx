import React from 'react'
import Document, { Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class extends Document {
  static getInitialProps = async (ctx: DocumentContext) => {
    const styledComponentsSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    // main ページのcssをここでレンダリングさせるためのenhancer
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => ({
          ...styledComponentsSheet.collectStyles(<App {...props} />)
        })
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: <>{styledComponentsSheet.getStyleElement()}</>
    }
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
