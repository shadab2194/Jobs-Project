import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homebg from '../assets/homebg.png'



const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }


    return (
        <div className=' flex flex-col bg-cover  w-full'>
            <img className='' src={homebg} alt="null" />
        
            <div className='absolute w-1/2  p-8 mt-48 border border-none shadow-md shadow-sky-400 '>
                <h1 className='text-blue-600 text-4xl font-bold font-serif mb-4  '>
                    LIFE IS ALL ABOUT CONNECTING THE DOTS...
                </h1>
                <p className='text-blue-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, distinctio tempora aut atque rem provident voluptate sed, est quas adipisci vero quae libero quam asperiores ipsam quibusdam cum eos minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellendus sequi deleniti cupiditate! Placeat maiores obcaecati labore dolorem omnis, culpa nisi, perspiciatis ipsa aut magnam nam, a quae accusantium doloribus.</p>
                <button onClick={handleLoginClick} className='text-white bg-sky-500 rounded-lg p-2 ml-12 text-lg  hover:scale-95 duration  '>
                    <Link to='/login' />Log In
                </button>
    
            </div>
            




        </div>
    )
}

export default Home
