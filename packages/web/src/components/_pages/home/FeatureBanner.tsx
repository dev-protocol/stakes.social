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
        className={`relative overflow-hidden rounded-lg transition-all duration-150 ease-in-out hover:shadow-[0_0_0_10px_rgba(0,0,0,0.1)] w-full block bg-black font-syne ${className}`}
      >
        <div className="absolute inset-0">
          <img
            className="absolute z-0 opacity-80 inset-0 object-cover"
            width={1920}
            height={1280}
            src="/images/banner/bg.jpg"
          ></img>
          <img
            className="absolute -right-20 md:right-0 w-auto h-[170%] translate-y-[-20%]"
            width={822}
            height={1280}
            src="/images/banner/kannon-bodhisattva-statue.png"
          ></img>
        </div>
        <section className="relative px-8 py-2">
          <aside className="mt-2">
            <span className="text-white border rounded-full border-white px-2 py-1">Upcoming</span>
          </aside>
          <h2 className="text-white font-clever text-3xl after:content-['→'] after:ml-4 mt-8 mb-2">Temples DAO</h2>
          <p className="text-white mb-8">Join the DAO that makes the next 1000 years</p>
          <aside>
            <span className="text-white font-bold flex gap-1 items-center opacity-60">
              Build with
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[1.2em] w-[1.2em] inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              Clubs
            </span>
          </aside>
        </section>
      </a>
    </Link>
  )
}
