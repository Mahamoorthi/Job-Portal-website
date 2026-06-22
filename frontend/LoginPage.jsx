import React, { useState } from 'react';
import shopping_doll from "../assets/shopping_doll.jpg"
import { NavLink } from 'react-router-dom'

function Register() {


  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch("http://127.0.0.1:8000/user_login/",{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body: JSON.stringify({
          username:username,
          password:password,
        }),
      });

      const data = await response.json();
      console.log(data);
      
      if(response.ok){
        alert("Login successful");
        localStorage.setItem("token",data.token);
        window.location.href = '/home';
      }else{
        alert("Login Failed");
      }
    }catch(error){
      console.error("Error",error);
    }
  };

  return (
    <div className='h-screen flex  flex-col items-center justify-center bg-gray-100 mt-10'>

      <h1 className='text-center font-bold text-2xl mb-5 text-blue-900'>Login and continue your journey</h1>

      <div className='flex `w-[800px]` mb-10 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-blue-950'>
        <div className='w-1/2'>
          <img src={shopping_doll} alt="" className='h-full w-full object-cover'/>
        </div>
        <div className='w-1/2 p-8 mb-10 flex flex-col justify-center'>
           <h1 className='mb-5 text-center font-semibold text-xl text-blue-900'>Register and explore more</h1>
          
          <form onSubmit={handleLogin} className="flex flex-col">
          <input type="name" 
             placeholder='Username'
             onChange={(e) => setUsername(e.target.value)}
             className='border-2 border-gray-300 focus:border-blue-500 outline-none p-2 mb-4 rounded-md'
          />
          
          <input type="password"
             placeholder='Password'
             onChange={(e) => setPassword(e.target.value)}
             className='border-2 border-gray-300 focus:border-blue-500 outline-none p-2 mb-4 rounded-md'
          />

          <button type="submit" className='bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>Login</button>

          </form>

         <p className='mt-5 text-center font-medium text-lg text-blue-900'>You are a new user?
            <NavLink to={"/register"} className='hover:underline'> Register Here </NavLink>
          </p>
        </div>
      </div>
    </div>
  
  )
}

export default Register