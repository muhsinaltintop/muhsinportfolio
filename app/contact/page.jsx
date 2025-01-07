import React from 'react'
import ContactButtons from '../_components/ContactButtons'

const page = () => {
  return (
    <div className='flex gap-10'>
        <ContactButtons label="Facebook" color="rgba(59,89,152,0.9)"/>
        <ContactButtons label="Instagram" color="rgba(59,89,152,0.9)"/>
        <ContactButtons label="LinkedIn" color="rgba(59,89,152,0.9)"/>
        <ContactButtons label="Email" color="rgba(59,89,152,0.9)"/>


    </div>
  )
}

export default page