import Link from 'next/link'
import React from 'react'

const NameCard = () => {
  return (
    <div>
        <div className="font-bold text-xl">Muhsin Altintop <span className="font-thin text-base">(He/Him)</span></div>
        <div>Helping Companies Build Fast, Scalable, and Secure Applications | Full-Stack Developer | Digital Transformation Expert</div>
        <div className="mt-1 text-sm text-slate-500">Leicester, England, United Kingdom <Link href="/contact" className="text-blue-800 font-bold">Contact Info</Link></div>
    </div>
  )
}

export default NameCard