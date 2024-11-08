import Image from 'next/image'
import React from 'react'

const HomeLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-1">
    <div className="w-6 text-justify flex items-center justify-center">
        <Image src="/home.svg" width="200" height="200" alt="home" />
    </div>
    <div className="text-xs">Home</div>
</div>

  )
}

export default HomeLogo