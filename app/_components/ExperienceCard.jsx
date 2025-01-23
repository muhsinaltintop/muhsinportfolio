"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SingleExperience from './SingleExperience';
import { experiences } from '../../public/Experience.json'

const ExperienceCard = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='w-full md:w-10/12 lg:w-8/12 h-fit md:rounded-xl group mx-auto border mt-8 p-6'>
      <h3 className='text-lg font-bold'>Experiences:</h3>
      {experiences.map((experience, index) => (
        <div key={index}>       
          <SingleExperience experience={experience}/>
          </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
