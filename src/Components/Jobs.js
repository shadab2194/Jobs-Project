import React, { useEffect, useRef, useState } from 'react'
import DisplayJobs from './DisplayJobs'
import Filter from './Filter'
import {BsSearch} from 'react-icons/bs'

const Jobs = () => {
  const [values, setValue]=useState({
    jobslist:[],
    searchInput:"",
    empType:[],
    minPackage:""
  })
  const inputRef=useRef(null);
  const handleInputFocus=()=>{
  inputRef.current.focus();
  }
  useEffect(()=>{
    
    const displayAllJobs=async()=>{
      const url =`https://apis.ccbp.in/jobs?employment_type=${values.empType}&minimum_package=${values.minPackage}&search=${values.searchInput}`;
      const options = {
        method: 'GET',
        headers : {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"
        },
      };
      const response = await fetch(url,options)
      const data= await response.json();
      if(response.ok===true){
        setValue({...values,jobslist:data.jobs})
      }
      console.log(data.jobs)
    }
    displayAllJobs();
  },[...values.searchInput,values.empType])

  const onChangeSearchInput = (event)=>{
    

    if(event.key==="Enter"){
      setValue({...values,searchInput:event.target.value}); 
    }
    // else if (event.key === null){
    //   setValue({...values})
    // }

  }

  const onChangeEmployType =(value,isChecked)=>{

    if(isChecked===true){
        setValue({...values,empType:[...values.empType,value]});
    }
    else{
      setValue({...values,empType:values.empType.filter(each=>each!==value)});
    }

      

  }
  
  return (
    <div className=' w-full flex bg-black'>
      <div className='w-1/4 h-screen'>
        <Filter onChangeEmploymentType={onChangeEmployType}/>
      </div>
      <div className='w-3/4  mx-2'>
        <form >

          <div>
          <input onChange={onChangeSearchInput} type="search" placeholder='Search ' ref={inputRef} className='mt-8 mb-6 h-8 rounded-md w-1/3 text-lg' />
          <button type='submit' className='text-white ml-2  rounded-md shadow-md h-8 w-14 border border-blue-400' onClick={handleInputFocus}>Search</button>
          </div>
        </form>
        <ul >
          {values.jobslist.map(each=>
            <DisplayJobs jobsData={each} key={each.id}/> 
          )}
        </ul>
      </div>
    </div>
  )
}

export default Jobs
