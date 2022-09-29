import "./App.css";
import { useState } from "react";

export default function Main() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="flex flex-col justify-center content-center mt-6">
      <h1 className="block w-full text-3xl mb-5">Welcome to Your Bank</h1>
      <form className="flex-column items-center">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="mt-2 mb-5 block text-sm text-slate-500 border"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="mt-2 mb-5 block text-sm text-slate-500 border"
        ></input>
        <button className="btn block border" onClick={() => setLoggedIn(true)}>Log In</button>
      </form>
    </div>
  );
}
