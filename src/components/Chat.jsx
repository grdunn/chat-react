/** @format */

import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat w-full flex flex-col">
      <div className="chat__recipient bg-slate-50 h-20 border-b flex-none px-10 flex items-center">
        <p className="font-light text-slate-900">
          To: {data.user?.displayName}
        </p>
      </div>
      <div className="chat__inner bg-slate-50 p-10 relative overflow-scroll h-full">
        <Messages />
        {data.chatId != 'null' && (
          <div className="">
            {/* <Input /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;