import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DisplayJobs = (props) => {
    const { jobsData } = props
    return (
     <Link>
        
        <li className='w-full list-none bg-gradient-to-r from-blue-600 to-black border border-double rounded-xl mb-3 mt-2 shadow-md shadow-blue-800'>
            <div className='flex justify-start items-start'>
                <img className='w-18 h-16 mt-1 ml-1' src={jobsData.company_logo_url} alt="" />
                <div className='mx-4'>
                    <h1 className='text-lg font-bold '>{jobsData.title}</h1>
                    <FaStar className='text-yellow-300 ' />
                    <span>{jobsData.rating}</span>
                </div>
            </div>
            <div className=' flex justify-between  '>
                <div className='flex ml-20'>
                    < FaLocationDot className='my-1' />
                    <span className=' font-semibold '>{jobsData.location}</span>
                    <FaBriefcase className='ml-4 my-1' />
                    <span className=' font-semibold mx-1'>{jobsData.employment_type}</span>
                </div>
                <h2 className='text-white mr-12 underline'>{jobsData.package_per_annum}</h2>
            </div>
            <div className='mx-2 text-slate-200'>
                <h2 className='underline font-semibold '>Description</h2>
                <p className='font-sans text-pretty'>{jobsData.job_description}</p>
            </div>
            
        </li>
     </Link>
    )
}

export default DisplayJobs
