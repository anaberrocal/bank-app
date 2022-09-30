import './login.css'
import { useState } from "react";

export default function Login() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
      <div className="container flex flex-col items-center justify-center h-screen w-screenmr-0">
        <h1 className="text-3xl mb-5 text-white">Welcome to Your Bank</h1>
        <form className="text-white">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="mt-2 mb-5 block text-sm text-slate-500 border rounded"
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="mt-2 mb-5 block text-sm text-slate-500 border rounded"
          ></input>
          <button className="bg-blue-500 text-white p-2 font-medium block rounded" onClick={() => setLoggedIn(true)}>Log In</button>
        </form>
      </div>
    );
  }
