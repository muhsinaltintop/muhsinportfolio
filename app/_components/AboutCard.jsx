"use client"
import React, { useState } from 'react';

const AboutCard = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='w-full md:w-10/12 lg:w-8/12 h-fit md:rounded-xl group mx-auto border mt-8 p-6'>
      <h2 className='font-bold'>About</h2>
      <p className='mt-2'>
        I am a Full-Stack Developer with over 3 years of experience creating scalable and user-friendly web applications. 
        I specialise in React, Next.js, and Strapi to build efficient and reliable solutions tailored to business needs.
      </p>
      <h3 className='font-bold mt-4'>What I do:</h3>
      <div>
        <div>
        {showMore && (
          <>
          <ul className='ml-2 mt-2'>
            <li>Develop responsive frontends and robust backend systems.</li>
            <li>Deploy secure and scalable applications using VPS, SSL, and CI/CD tools.</li>
            <li>Create custom platforms for industries like real estate and education.</li>
          </ul>
            <h3 className='font-bold mt-4'>What sets me apart:</h3>
            <ul className='ml-2 mt-2'>
              <li>A strong technical background combined with an understanding of business goals.</li>
              <li>I focus on delivering the best possible solutions based on client needs, without making excuses.</li>
              <li>Experience working remotely with diverse teams to deliver projects on time.</li>
              <li>A focus on building solutions that improve performance and user satisfaction.</li>
            </ul>
            <p className='mt-2'>If you need a developer who can bring your ideas to life, feel free to reach out.</p>
          </>
        )}
        </div>
        <div>
          <button
            className='mt-4 text-slate-600 font-bold hover:text-slate-400'
            onClick={() => setShowMore(!showMore)}
            >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
    </div>
    </div>
  );
};

export default AboutCard;
