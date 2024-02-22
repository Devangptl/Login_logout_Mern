import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetch("http://localhost:8800/login" , {
      method : "POST",
      headers : {
        "Content-Type" :"application/json",
      },
      body : JSON.stringify({email , password})

    })

    const res = await data.json()

    console.log(res)

  };

  return (
    <div>
      <div class="flex items-center justify-center  h-screen">
        <div class=" w-96 flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
          <form onSubmit={handleSubmit}>
            <div class="mb-8 flex justify-center">
              <img
                class="w-24"
                src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
                alt=""
              />
            </div>
            <div class="flex flex-col text-sm rounded-md">
              <input
                onChange={(e) => setEmail(e.target.value)}
                class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                type="text"
                placeholder="Username or Email id"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
              type="submit"
            >
              Login
            </button>
            <div class="mt-5 flex justify-between text-sm text-gray-600">
              <Link to={"/"}>Forgot password?</Link>
              <Link to={"/signup"}> Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
