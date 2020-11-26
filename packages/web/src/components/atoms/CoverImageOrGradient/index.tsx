import React from 'react'
import styled from 'styled-components'

type Props = { src?: string; ratio?: number }

const Cover = ({ src, ratio = 52.5 }: Props) => styled.div`
  position: relative;
  background-size: cover;
  background-image: url(${src}),
    linear-gradient(134deg, rgb(47, 67, 237) 0%, rgb(47, 128, 237) 23%, rgb(47, 172, 237) 46%, rgb(190, 208, 230) 100%);
  padding-top: ${ratio}%;
`
export const CoverImageOrGradient = (props: Props) => (C => <C />)(Cover(props))
