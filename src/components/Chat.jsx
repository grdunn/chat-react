/** @format */

import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat ml-80 p-10">
      <div className="chat__inner">
      <span>{data.user?.displayName}</span>
      <Messages />
      <Input />
      </div>
    </div>
  );
};

export default Chat;
