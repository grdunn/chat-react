import React from "react";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="relative border-r bg-white w-80 flex-none h-full overflow-scroll">
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
