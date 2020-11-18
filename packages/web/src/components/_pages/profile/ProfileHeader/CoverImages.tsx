import { Image } from 'antd'
import React from 'react'
import { Grid } from 'src/components/atoms/Grid'
import { Image as ImageType } from 'src/fixtures/dev-for-apps/utility'
import styled from 'styled-components'

interface Props {
  images?: ImageType[]
  className?: string
}

const MAX_HEIGHT_MOBILE = '180px'
const MAX_HEIGHT_LAPTOP = '260px'
const Wrap = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  overflow: hidden;
  height: ${MAX_HEIGHT_MOBILE};
  @media (min-width: 768px) {
    height: ${MAX_HEIGHT_LAPTOP};
  }
`
const ImageWrap = styled.div``
const ImageItem = styled(Image)`
  &,
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: ${MAX_HEIGHT_MOBILE};
    @media (min-width: 768px) {
      max-height: ${MAX_HEIGHT_LAPTOP};
    }
  }
  img {
    object-fit: cover;
  }
`

const StyledImage = ({ image }: { image: ImageType }) => {
  return (
    <ImageWrap>
      <ImageItem
        src={image.url}
        placeholder={(thum => (
          <Image src={thum.url} width={thum.width} height={thum.height} />
        ))(image.formats.thumbnail)}
      />
    </ImageWrap>
  )
}

const MAX_ITEMS = 4

export const CoverImages = ({ images, className }: Props) => {
  const files = images ? images.slice(0, MAX_ITEMS) : []

  return (
    <Wrap className={className}>
      {files.map((image, i) => (
        <StyledImage image={image} key={i} />
      ))}
    </Wrap>
  )
}
