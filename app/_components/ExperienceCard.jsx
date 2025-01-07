"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SingleExperience from './SingleExperience';

const ExperienceCard = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='w-full md:w-10/12 lg:w-8/12 h-fit md:rounded-xl group mx-auto border mt-8 p-6'>
      <h3 className='text-lg font-bold'>Experiences:</h3>
      <SingleExperience/>
    </div>
  );
};

export default ExperienceCard;
