import Link from 'next/link'
import React from 'react'

interface Props {
  className?: string
}

export const FeatureBanner = ({ className }: Props) => {
  return (
    <Link href="https://temples.clubs.stakes.social/" passHref>
      <a
        target="_blank"
        rel="norefferer noopener"
        className={`relative overflow-hidden rounded-lg transition-all duration-150 ease-in-out hover:shadow-[0_0_0_10px_rgba(0,0,0,0.1)] w-full p-8 block bg-black font-syne ${className}`}
      >
        <div className="absolute inset-0">
          <img
            className="absolute z-0 opacity-80 inset-0 object-cover"
            width={1920}
            height={1280}
            src="/images/banner/bg.jpg"
          ></img>
          <img
            className="absolute right-0 w-auto h-[170%] translate-y-[-20%]"
            width={822}
            height={1280}
            src="/images/banner/kannon-bodhisattva-statue.png"
          ></img>
        </div>
        <div className="relative">
          <aside className="mb-2">
            <span className="text-white border rounded-full border-white px-2 py-1">New</span>
          </aside>
          <h2 className="text-white font-clever text-3xl after:content-['→'] after:ml-4 mb-4">Temples DAO</h2>
          <p className="text-white">Join the DAO that makes the next 1000 years</p>
        </div>
      </a>
    </Link>
  )
}
