import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'

interface Props {
  className?: string
}

export const FeatureBanner = ({ className }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  return (
    <>
      <span className={className}>
        <p className="mb-1 font-bold">New:</p>
        <Link href="https://clubs.place" passHref>
          <a
            target="_blank"
            rel="norefferer noopener"
            className="overflow-hidden rounded-lg transition-all duration-150 ease-in-out hover:shadow-[0_0_0_10px_rgba(0,0,0,0.1)] w-full block bg-[#150039]"
          >
            <img src="/images/banner/desktop.png" className="w-full h-auto hidden lg:block" />
            <img src="/images/banner/mobile.png" className="w-full h-auto lg:hidden" />
          </a>
        </Link>
      </span>

      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <p className="text-md mt-5">
          Stakes.social has been deprecated in accordance with the announcement of 27 August 2024. Withdraw rewards from
          the networks.
        </p>
      </Modal>
    </>
  )
}
