import React from 'react'
import companylogo from '../assets/companylogo.png'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';

const Navbar = () => {
  const navigate= useNavigate();
  const toHome=()=>{
    navigate('/')
  }
  const aboutUs=()=>{
    navigate('/jobs')
  }
  const logOut=()=>{
    Cookies.remove("token");
    navigate("/")
  }
  const jwttoken =Cookies.get("token")
  return (
    <div className='bg-gradient-to-r from-black via-blue-900 to-blue-500'>
      
            <ul className='flex justify-around items-start '>
              <li> 
                <img className=' mx-auto' src={companylogo} alt="" />
              </li>
              <div className='flex justify-around mx-auto p-4'>

                <li onClick={toHome} className='font-serif font-bold text-white text-xl ml-4 hover:scale-90 duration-200 cursor-pointer'> <Link to ='/'/>Home</li>
                <li onClick={aboutUs} className='font-serif font-bold  text-white text-xl ml-8 hover:scale-90 duration-200 cursor-pointer'><Link to ='/about'/>Jobs</li>
                <li className='font-serif font-bold  text-white text-xl ml-10  cursor-pointer'><Link to ='/search'/>Find a Job</li>
                <input className=' ml-4 rounded-md w-72  ' type="text" placeholder='Enter the skills/company name' />
                <button className='ml-4 bg-blue-950 rounded-lg w-14 font-sans text-white hover:scale-90 duration-100'> Search</button>
                <div>
                {jwttoken ?(<button onClick={logOut} className=' bg-blue-950  rounded-lg ml-24 w-16 text font-sans text-white  hover:scale-90 duration-100 my-2'>Log Out</button>):null}
                </div>
              </div>
            </ul>
      
      </div>
  
  )
}

export default Navbar
