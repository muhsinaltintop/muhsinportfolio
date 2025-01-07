import Image from 'next/image'
import React from 'react'

const LinkedIn = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-1">
    <div className="w-6 text-justify flex items-center justify-center">
        <Image src="/people.svg" width="200" height="200" alt="home" />
    </div>
    <div className="text-xs">LinkedIn</div>
</div>
  )
}

export default LinkedIn