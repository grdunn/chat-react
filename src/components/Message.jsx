import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  const timeSent = new Date(message.date.seconds).toLocaleString();

  const handleDelete = async () => {
    // TODO: Need a modal to confirm where to delete!
    // Also need to update the UserChats last message
    // it currently displays the delete message. :D
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayRemove(message),
      });
    } catch (err) {
      console.log("error :" + err);
    }
  };

  useEffect(() => {
    // behavior: smooth
    ref.current?.scrollIntoView({});
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${
        message.senderId === currentUser.uid && "flex-row-reverse"
      } flex mb-8`}
    >
      <div className="messageInfo">
        {message.senderId === currentUser.uid || (
          <img
            className="rounded-full w-12 h-12"
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt=""
          />
        )}
      </div>
      <div className={`messageContent mr-8 ml-8 self-start`}>
        <p
          className={`font-light p-3 rounded-lg max-w-sm ${
            message.senderId === currentUser.uid
              ? "bg-blue-600 text-white"
              : "bg-white"
          }`}
        >
          {message.text}
        </p>
        {message.img && <img src={message.img} alt="" />}
        <span className="text-xs font-light text-slate-400">{timeSent}</span>
        <button onClick={handleDelete} className="text-xs text-slate-400 ml-5">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Message;
