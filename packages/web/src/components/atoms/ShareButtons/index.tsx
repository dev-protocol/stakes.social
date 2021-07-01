import styled from 'styled-components'
import React, { useEffect } from 'react'

declare global {
  interface Window {
    twttr: any
  }
}

const ShareButton = styled.p`
  margin: 0;
  font-size: 0;
`
let isLoadWidgets = false
export default function ShareTweet({ title }: { title: string }) {
  useEffect(() => {
    if (isLoadWidgets) {
      window!.twttr!.widgets!.load()
    } else {
      const s = document.createElement('script')
      s.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.body.appendChild(s)
      isLoadWidgets = true
    }
  }, [])

  return (
    <ShareButton className="btn-tweet">
      <a
        href="https://twitter.com/share"
        data-text={'Check out ' + title + ' on Stakes.social #DevProtocol'}
        data-size="large"
        className="twitter-share-button"
        data-show-count="false"
        data-lang="en"
      >
        Tweet
      </a>
    </ShareButton>
  )
}
