import "./App.css";
import { useState } from "react";
import Login from "./components/login/login";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? <div className="text-white">Please Log In</div> : <Login />}
    </>
  );
}
