"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SkillsCard = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='w-full md:w-10/12 lg:w-8/12 h-fit md:rounded-xl group mx-auto border mt-8 p-6'>
      <h3 className='text-lg font-bold'>Skills:</h3>
      <p className='flex gap-2'>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </Link>
        <Link href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </Link>
        <Link href="https://reactjs.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </Link>
        <Link href="https://nextjs.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" alt="nextjs" width="40" height="40"/></Link> 
        <Link href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </Link> 
        <Link href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </Link> 
        <Link href="https://nodejs.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </Link>
        <Link href="https://expressjs.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </Link>
        <Link href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </Link>
        <Link href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </Link>
        <Link href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </Link>
        <Link href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </Link> 
        <Link href="https://www.figma.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </Link> 
        <Link href="https://git-scm.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </Link> 
        <Link href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> </Link> 
        <Link href="https://jestjs.io" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </Link> 
        <Link href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </Link> 
        <Link href="https://postman.com" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </Link> 
        <Link href="https://www.python.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </Link>   
      </p>
    </div>
  );
};

export default SkillsCard;
