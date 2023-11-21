import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        if (doc.exists()) {
          const sorted = Object.entries(doc.data()).sort(
            (a, b) => b[1].date - a[1].date
          );
          setChats(sorted);
        }
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, []);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats overflow-auto">
      <ul role="list" class="divide-y divide-gray-100">
      <li className="h-24 flex px-8 justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4 items-center">
          <div className="min-w-0 flex-auto">
            <p className="font-semibold leading-6 text-gray-700">All conversations</p>
          </div>
        </div>
      </li>
      {chats?.map((chat) => (
        <li key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)} className="h-24 flex px-8 justify-between gap-x-6 py-5 hover:bg-slate-50 hover:cursor-pointer">
          <div className="flex min-w-0 gap-x-4 items-center">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={chat[1].userInfo.photoURL} alt=""/>
            <div className="min-w-0 flex-auto">
              <p className="font-semibold leading-6 text-gray-700">{chat[1].userInfo.displayName}</p>
              <p className="truncate text-sm font-light leading-5 text-gray-700">{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Chats;
