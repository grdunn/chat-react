import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const handleSignOut = (a) => {
    dispatch({ type: "RESET_CHAT", payload: currentUser });
    signOut(auth);
  };

  return (
    <div className="home ">
      <header className="h-20 flex justify-center header absolute top-0 left-0 w-full bg-white z-50">
        <div className="bg-white logo w-96 flex-none flex items-center pl-10 bg-white border-r">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </div>
        <div className="mx-auto pt-4 pr-10 pb-4 flex justify-end w-full border-b">
          <div className="flex items-center">
            <nav>
              <ul className="flex">
                <li>
                  <a className="text-sm font-medium mr-6" href="#">
                    Code
                  </a>
                </li>
                <li>
                  <a className="text-sm font-medium mr-6" href="#">
                    Credit
                  </a>
                </li>
              </ul>
            </nav>
            <div className="relative mr-6">
              <img
                className="rounded-full w-8 h-8"
                src={currentUser.photoURL}
                alt=""
              />
              <span className="top-0 left-6 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <button className="text-sm font-medium" onClick={handleSignOut}>
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="relative flex offset-container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
