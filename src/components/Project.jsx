import React from 'react'
import { projectArray } from '../assets/project'
import '../components/Header.css'

const Project = () => {
  return (
    <div className='mt-10' id='Projects'>
        <div className='text-center mb-10'>
            <h1 className='text-5xl'>Projects <span className=' text-red-500'>Made</span></h1>
        </div>
        <div className='lg:grid lg:grid-cols-3 lg:gap-6 flex flex-col gap-10 '>
          {projectArray.map((i,index)=>{
            return(
              <div key={index} className=' shadow-md hover:scale-110 duration-700 '>
                <div className='flex flex-col justify-center items-center '>
                  <img className=' flex justify-center items-center h-64' src={i.image} alt={i.name}/>
                  <h1 className='text-2xl mt-2 mb-2'>{i.name}</h1>
                </div>
                <div className='flex justify-evenly mb-3'>
                  <a  href={`${i.view}`} className=' w-36  text-lg bg-indigo-500 text-white rounded-md flex justify-center items-center hover:opacity-80 hover:duration-500'>
                  <p className=' '>View</p>
                  </a>
                  <a href={`${i.source}`} className=' w-36 text-lg bg-indigo-500 text-white rounded-md flex justify-center items-cente hover:opacity-80 hover:duration-500'>
                  <p className='w-30 text-lg bg-indigo-500 text-white rounded-md p-2 ' >Source Code</p>
                  </a>
                 
                </div>
              </div>
            )
          })}
             
        </div>

    </div>
  )
}

export default Project