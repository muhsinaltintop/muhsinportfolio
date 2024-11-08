import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-1">
        <div className="w-6 text-justify flex items-center justify-center">
            <Image src="/message.svg" width="200" height="200" alt="home" />
        </div>
        <div className="text-xs">Contact</div>
    </div>
  )
}

export default Contact