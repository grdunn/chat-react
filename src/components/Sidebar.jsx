import React from "react";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="sidebar w-80 border-r flex-none h-full overflow-scroll">
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
