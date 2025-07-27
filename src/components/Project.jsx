import React from 'react';
import { projectArray } from '../assets/project';
import '../components/Header.css';

const Project = () => {
  return (
    <div className='mt-10 container' id='Projects'>
      <div className='text-center mb-10'>
        <h1 className='text-5xl font-bold'>
          Projects <span className='text-red-500'>Made</span>
        </h1>
      </div>
      <div className='lg:grid lg:grid-cols-3 lg:gap-6 flex flex-col gap-10'>
        {projectArray.map((project, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105'
          >
            <div className='flex flex-col justify-center items-center p-4'>
              <img
                className='h-64 w-full object-cover rounded-t-lg'
                src={project.image}
                alt={project.name}
              />
              <h1 className='text-2xl font-semibold mt-3 mb-2'>{project.name}</h1>
              <p className='text-gray-600 text-center mb-3'>{project.tools}</p> {/* Added Tools */}
            </div>
            <div className='flex justify-evenly mb-3'>
              <a
                href={project.view}
                target='_blank' /* Ensuring it opens in a new tab */
                className='w-36 text-lg bg-indigo-500 text-white py-2 rounded-md flex justify-center items-center hover:bg-indigo-600 transition duration-300'
              >
                View
              </a>
              {/* <a
                href={project.source}
                target='_blank'
                className='w-36 text-lg bg-indigo-500 text-white rounded-md py-2 flex justify-center items-center hover:bg-indigo-600 transition duration-300'
              >
                Source Code
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
