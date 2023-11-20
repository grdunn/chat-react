import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  const timeSent = new Date(message.date.seconds).toLocaleString();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${
        message.senderId === currentUser.uid && "flex-row-reverse"
      } flex mb-8`}
    >
      <div className="messageInfo">
        <img
          className="rounded-full w-12 h-12"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div className={`messageContent mr-8 ml-8 self-start`}>
        <p
          className={`p-3 rounded-lg max-w-sm ${
            message.senderId === currentUser.uid
              ? "bg-blue-600 text-white"
              : "bg-slate-100"
          }`}
        >
          {message.text}
        </p>
        {message.img && <img src={message.img} alt="" />}
        <span className="text-xs text-slate-400">{timeSent}</span>
      </div>
    </div>
  );
};

export default Message;
