import Link from 'next/link'
import React from 'react'

const ContactButtons = ( {label, color, hoverColor, icon}) => {
    
  return (
    <div className="flex w-fit items-center justify-center rounded-2xl text-white py-1 px-4" style={{backgroundColor: color? color : "rgba(0,0,0)"}}>
       <div className='flex items-center justify-center w-full gap-2'>
           {icon? icon : ""} {label}    
        </div>    
    </div>
  )
}

export default ContactButtons