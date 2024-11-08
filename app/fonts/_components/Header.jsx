import React from 'react'
import Logo from './_atoms/Logo'
import HomeLogo from './_atoms/HomeLogo'
import Link from 'next/link'
import LinkedIn from './_atoms/LinkedIn'
import Portfolio from './_atoms/Portfolio'
import Contact from './_atoms/Contact'

const Header = () => {
  return (
    <div className="bg-slate-100 pl-[5%] md:pl-[15%] flex">
        <div className="w-12"><Logo/></div>
        <div className="w-64"></div>
        <div className="mx-1">
        <Link href="/">
            <HomeLogo/>
        </Link> 
        </div>
        <div className="mx-1">
            <Link href="https://www.linkedin.com/in/muhsinaltintop/" target="_blank">
            <LinkedIn/>
            </Link>
        </div>
        <div className="mx-1">
            <Portfolio/>
        </div>
        <div className="mx-1">
            <Contact/>
        </div>
    </div>
  )
}

export default Header