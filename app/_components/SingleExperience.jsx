import Image from 'next/image'
import React from 'react'

const SingleExperience = ({experience}) => {
  return (
    <div>
      <h4 className='font-bold mt-4'>{experience.role} / <span className='italic text-sm'>{experience.dates}</span> </h4>
      {experience?.company ? <div className='italic'>- {experience.company}</div> : ""}
      <ul className='list-disc'>
      {experience?.responsibilities?.map((responsibility, index)=> (
        <li key={index} className='ml-4 my-1'>{responsibility}</li>
      ))}
      </ul>


        {console.log("exp: ", experience.responsibilities)}

    </div>
  )
}

export default SingleExperience