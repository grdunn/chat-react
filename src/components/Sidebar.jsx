import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="sidebar fixed h-full w-80 p-10">
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
