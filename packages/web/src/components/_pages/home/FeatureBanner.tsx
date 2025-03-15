import Link from 'next/link'
import React, { useEffect } from 'react'
import { notification } from 'antd'
import { NotificationPlacement } from 'antd/lib/notification'

interface Props {
  className?: string
}

const openNotification = (placement: NotificationPlacement) => {
  notification.info({
    message: `Notification`,
    description: `Stakes.social has been deprecated in accordance with the announcement of 27 August 2024. Withdraw rewards from the networks.`,
    duration: null,
    placement
  })
}

export const FeatureBanner = ({ className }: Props) => {
  useEffect(() => {
    openNotification('top')
  }, [])
  return (
    <span className={className}>
      <p className="mb-1 font-bold">New:</p>
      <Link href="https://clubs.place" passHref>
        <a
          target="_blank"
          rel="norefferer noopener"
          className={`relative overflow-hidden rounded-lg transition-all duration-150 ease-in-out hover:shadow-[0_0_0_10px_rgba(0,0,0,0.1)] w-full block bg-[#150039]`}
        >
          <img src="/images/banner/desktop.png" className="w-full h-auto hidden lg:block" />
          <img src="/images/banner/mobile.png" className="w-full h-auto lg:hidden" />
        </a>
      </Link>
    </span>
  )
}
