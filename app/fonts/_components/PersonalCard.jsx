import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import NameCard from './_atoms/NameCard'

const PersonalCard = () => {
  return (
    <div className="w-full md:w-10/12 lg:w-8/12 h-96 bg-slate-300 md:rounded-xl group mx-auto">
    <div className="w-full h-48 rounded-t-xl relative">
        <div 
            className="w-full h-full bg-[url('/linkedinheader.jpeg')] bg-cover bg-center md:rounded-t-xl">
        </div>
        <div className="w-24 h-24 md:w-36 md:h-36 bg-slate-400 rounded-full absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 md:left-6 md:translate-x-0">
            <ProfilePhoto/>
        </div>
    </div>
    <div className="bg-white w-full h-56 flex flex-col">
        <div className="mt-16 md:mt-24 ml-6 text-center md:text-left"><NameCard/></div>
    </div>
</div>


  )
}

export default PersonalCard