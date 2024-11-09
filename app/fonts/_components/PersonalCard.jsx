import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import NameCard from './_atoms/NameCard'

const PersonalCard = () => {
  return (
    <div className="w-9/12 h-96 bg-slate-300 rounded-xl group">
    <div className="w-full h-36 rounded-t-xl relative">
      <div className="w-full h-full bg-[url('/linkedinheader.jpeg')] rounded-t-xl"></div>
        <div className="w-36 h-36 bg-slate-400 rounded-full absolute -bottom-1/2 left-6">
            <ProfilePhoto/>
        </div>
    </div>
    <div className="bg-white w-full h-56 flex flex-col">
        <div className="mt-24 ml-6"><NameCard/></div>
    </div>
</div>

  )
}

export default PersonalCard