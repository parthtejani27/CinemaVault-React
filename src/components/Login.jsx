import React, { useState } from "react";
// import Navbar from "./Navbar";
import FormInput from "../reusable-components/FormInput";
import {Lock, Mail} from 'lucide-react'
import FormButton from "../reusable-components/FormButton";
import {Link} from 'react-router-dom'

const Login = () => {

  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  const handleLogin=(e)=>{
    console.log("login")
    e.preventDefault();
  }


  return (
    <div>
      {/* <Navbar /> */}
      <div
        className="absolute w-[100%] h-[100%] bg-no-repeat bg-cover bg-opacity-25 flex items-center justify-center"
        style={{ backgroundImage: `url("src/assets/ntflxx.png")` }}
      >
        <div className=" max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2
              className="text-3xl font-bold mb-6 text-center bg-gradient-to-r text-slate-300 bg-clip-text"
            >
              Login
            </h2>

            <form onSubmit={handleLogin}>
              <FormInput
                icon={Mail}
                type='email'
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

<FormInput
                icon={Lock}
                type='password'
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <FormButton buttonName="Login"  type="submit"/>
            </form>

          </div>
          <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
            <p className="text-sm text-gray-400">
              register here {"   "}
              <Link to={'/signup'} className="text-red-400 hover:underline">
              Sign up
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
