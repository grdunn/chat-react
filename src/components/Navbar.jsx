/** @format */

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>Chat</span>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
};

export default Navbar;
