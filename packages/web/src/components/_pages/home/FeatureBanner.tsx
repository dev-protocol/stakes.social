import Link from 'next/link'
import React from 'react'

interface Props {
  className?: string
}

export const FeatureBanner = ({ className }: Props) => {
  return (
    <Link href="https://www.clubs.place/post/upgrade-now-a-step-by-step-guide-to-moving-from-stakes-social-to-clubs" passHref>
      <a
        target="_blank"
        rel="norefferer noopener"
        className={`relative overflow-hidden rounded-lg transition-all duration-150 ease-in-out hover:shadow-[0_0_0_10px_rgba(0,0,0,0.1)] w-full block bg-[url('/images/banner/clubs_banner.jpg')] font-syne ${className}`}
      >
        <section className="relative px-8 py-2">
          <h2 className="text-white font-medium font-sans text-3xl after:ml-4 mt-2 mb-2">
            Thank you very much for being part of Stakes.Social
          </h2>
          <h2 className="text-white font-sans text-3xl after:ml-4 mt-8 mb-2">
            From now on you can use
            <img className="inline w-[127px] h-[35px] ml-2" src="/images/banner/clubs_logo_dark.png"></img>
          </h2>
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
