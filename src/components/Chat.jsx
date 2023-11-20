/** @format */

import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat ml-80 p-10 max-w-4xl h-full">
      <div className="chat__inner relative">
        <h2 className="text-2xl font-extrabold text-slate-900">
          {data.user?.displayName}
        </h2>
        <Messages />
        <div className="">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Chat;
