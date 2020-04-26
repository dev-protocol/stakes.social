import React, { SVGProps } from 'react'
import { StakesSocialBlack, StakesSocialWhite } from '../Svgs/tsx'
import { A } from '../A'

interface Props {
  colorSchema?: 'black' | 'white'
  props: SVGProps<SVGSVGElement>
}

const link = A({ href: '/' })

export const BrandLogo = ({ colorSchema, props }: Props) => {
  return link(
    colorSchema === 'black' ? (
      <StakesSocialBlack {...props}></StakesSocialBlack>
    ) : (
      <StakesSocialWhite {...props}></StakesSocialWhite>
    )
  )
}
