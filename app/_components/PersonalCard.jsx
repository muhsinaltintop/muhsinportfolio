import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import NameCard from './_atoms/NameCard'
import ContactButtons from './ContactButtons'
import { Icon, PaperPlane } from './svg/icons'
import Link from 'next/link'

const PersonalCard = () => {
  return (
<div className="w-full md:w-10/12 lg:w-8/12 h-fit md:rounded-xl group mx-auto">
    <div className="w-full h-48 rounded-t-xl relative ">
        <div 
            className="w-full h-full bg-[url('/banner.png')] bg-cover bg-center md:rounded-t-xl">
        </div>
        <div className="w-24 h-24 md:w-36 md:h-36 bg-slate-400 rounded-full absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 md:left-6 md:translate-x-0">
            <ProfilePhoto/>
        </div>
    </div>
    <div className='border border-solid rounded-xl pb-6'>
        <div className="bg-white w-full h-64 flex flex-col">
            <div className="mt-24 ml-6 text-center md:text-left"><NameCard/></div>
        </div>
        <div className='flex'>
                <div className='ml-6'>
                    <Link href="/contact">
                    <ContactButtons label={"Message"} color={"rgba(10,102,194)"} hoverColor={"rgba(0,0,0)"} icon={<PaperPlane/>}/>
                    </Link>
                </div>
                <Link href="/contact">
                <div className='text-black border-2 border-black rounded-full w-10 h-10 items-center text-center text-xl ml-2 -m-1'>
                    ...
                </div>
                </Link>
        </div>
    </div>
   
</div>


  )
}

export default PersonalCard