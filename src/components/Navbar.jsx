import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h1>{currentUser.displayName}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
};

export default Navbar;
