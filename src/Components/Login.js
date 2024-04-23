import React, { useEffect, useState } from 'react'
import companylogo from '../assets/companylogo.png'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    const navigate =useNavigate();
    const [value, setValue]= useState({
        username:"",
        password:""
    });
    const onSubmitdetails=async(e)=>{
             e.preventDefault();
             
            
             const url ="https://apis.ccbp.in/login";
             const userDetails={
                username: value.username,
                password: value.password,
                showErrorMsg:false,
                errorMsg:""
             }
             const options={
                method:"Post",
                body:JSON.stringify(userDetails)
                }

             
             const response = await fetch(url,options);
             const data= await response.json();
             console.log(data)
             console.log(response)
             if(response.ok===true){
                setValue({...value,showErrorMsg:false})
                Cookies.set("token",data.jwt_token);
                navigate("/");
             }
             else{
                setValue({...value,showErrorMsg:true,errorMsg:data.error_msg})  
             }
             
            }
            const onChangeUsername=(e)=>{
                setValue({...value,username:e.target.value});

            }
            const onChangePassword=(e)=>{
                setValue({...value,password:e.target.value});
                
            }
            const jwttoken =Cookies.get("token")
        
            useEffect(()=>{
                if(jwttoken!==undefined){
                    navigate("/");
                }
            })
    
    return (
        <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-b from-black via-slate-900 to-gray-600">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-16 w-auto" src={companylogo} alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 shadow-md shadow-slate-200 border-cyan-600 rounded-md p-6">
                <form className="space-y-6 " onSubmit={onSubmitdetails}>
                    <div>
                        <label htmlFor="email" className="block text-xl font-medium leading-6 text-white">Username</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={onChangeUsername} />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-xl font-medium leading-6 text-white">Password</label>
                            <div className="text-sm">
                                <a href="https://www.google.co.in/" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  placeholder:text-gray-400  sm:text-sm sm:leading-6" onChange={onChangePassword}/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2">Sign in</button>
                        {value.showErrorMsg?(<p className='text-red-700 font-bold'>{value.errorMsg}</p>):null}
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-white">
                    Not a member?
                    <a href="https://www.google.co.in/" className="text-blue-500 font-semibold leading-6 hover:text-indigo-500">Start a 14 day free trial</a>
                </p>
            </div>
        </div>
    )
}

export default Login
