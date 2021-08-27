import { Image } from 'antd'
import React from 'react'
import { Container } from 'src/components/atoms/Container'
import { Grid } from 'src/components/atoms/Grid'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { Image as ImageType } from 'src/fixtures/dev-for-apps/utility'
import styled from 'styled-components'

interface Props {
  accountAddress?: string
  className?: string
}

const MAX_HEIGHT_MOBILE = 180
const MAX_HEIGHT_LAPTOP = 260
const Wrap = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  overflow: hidden;
  height: ${MAX_HEIGHT_MOBILE}px;
  background-color: black;
  @media (min-width: 768px) {
    height: ${MAX_HEIGHT_LAPTOP}px;
  }
`
const ImageWrap = styled.div`
  &,
  & > * {
    width: 100%;
    height: 100%;
  }
`
const ImageItem = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: ${MAX_HEIGHT_MOBILE}px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  @media (min-width: 768px) {
    max-height: ${MAX_HEIGHT_LAPTOP}px;
  }
`
const BannerContainer = styled(Container)`
  background-image: url('https://res.cloudinary.com/haas-storage/image/upload/v1598697538/background_wmc31h.png');
  background-repeat: no-repeat;
  background-position: 90% 50%;
  background-size: auto ${MAX_HEIGHT_MOBILE - 50}px;
  @media (min-width: 768px) {
    background-size: auto ${MAX_HEIGHT_LAPTOP - 50}px;
  }
`

const Banner = () => {
  return <BannerContainer />
}

const StyledImage = ({ image }: { image: ImageType }) => {
  return (
    <ImageWrap>
      <ImageItem
        src={image.url}
        placeholder={(thum => (
          <Image src={thum?.url} width={thum?.width} height={thum?.height} />
        ))(image.formats?.thumbnail)}
      />
    </ImageWrap>
  )
}

const MAX_ITEMS = 4

export const CoverImages = ({ accountAddress, className }: Props) => {
  const { data } = useGetAccount(accountAddress)
  const files = data?.cover_images?.slice(0, MAX_ITEMS)

  return (
    <Wrap className={className}>
      {files && files.length > 0 ? files.map((image, i) => <StyledImage image={image} key={i} />) : <Banner />}
    </Wrap>
  )
}
