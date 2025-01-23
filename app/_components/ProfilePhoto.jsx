import Image from 'next/image'
import React from 'react'

const ProfilePhoto = () => {
  return (
    <div className="relative w-32 h-32 rounded-full overflow-hidden flex items-center justify-center m-auto  bg-white border-4">
  <Image 
    src="/muhsin.png" 
    alt="avatar" 
    width={200} 
    height={200} 
    className="object-cover"
  />
</div>
  )
}

export default ProfilePhoto
