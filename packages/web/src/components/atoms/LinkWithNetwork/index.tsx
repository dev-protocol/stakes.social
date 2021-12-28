import React, { useMemo } from 'react'
import Link, { LinkProps } from 'next/link'
import { useLinkWithNetwork } from 'src/fixtures/utility'

type Props = React.PropsWithChildren<LinkProps> & {
  rewrite?: boolean
}

export const LinkWithNetwork = ({ rewrite = true, ...props }: Props) => {
  const { withNetwork } = useLinkWithNetwork()
  const href = useMemo(
    () => (rewrite && props.href ? withNetwork(props.href as string /** TODO: Support UrlObject */) : props.href),
    [rewrite, props.href, withNetwork]
  )
  const as = useMemo(
    () => (rewrite && props.as ? withNetwork(props.as as string /** TODO: Support UrlObject */) : props.as),
    [rewrite, props.as, withNetwork]
  )

  return <Link {...{ ...props, href, as }}>{props.children}</Link>
}
