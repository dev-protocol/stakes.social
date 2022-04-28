import React, { useEffect, useState } from 'react'
import { Twitter, Discord, Telegram, Medium, Github } from '../../atoms/SocialButtons/index'

export const Footer = () => {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <div className="bg-black py-8 mt-8 text-gray-300">
      <div className="container mx-auto px-2 flex flex-col items-end">
        <div className="w-full flex justify-end">
          <div className="mb-4 flex">
            <Twitter target="_blank" rel="noopener noreferrer" />
            <Discord />
            <Github target="_blank" rel="noopener noreferrer" />
            <Telegram />
            <Medium />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <a className="mr-2 text-blue-400 hover:underline" href={'/terms-of-use'}>
            Terms of Use
          </a>
          <span>|</span>
          <a
            className="ml-2 text-blue-400 hover:underline"
            href={'https://github.com/dev-protocol/community/blob/main/CODE_OF_CONDUCT.md'}
            target={'_blank'}
            rel="noreferrer"
          >
            Code of Conduct
          </a>
        </div>

        <div>
          <span>Powered by</span>
          <a
            className="font-bold ml-1 text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://devprotocol.xyz/"
          >
            Dev Protocol
          </a>
        </div>
        <span className="text-gray-600">{year} All rights reserverd.</span>
      </div>
    </div>
  )
}
