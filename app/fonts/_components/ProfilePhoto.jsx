import Image from 'next/image'
import React from 'react'

const ProfilePhoto = () => {
  return (
    <div className="p-1 bg-white rounded-full ">
        <Image src="/avatar.png" width="200" height="200" alt="avatar" className="object-cover rounded-full"/>
    </div>
  )
}

export default ProfilePhoto