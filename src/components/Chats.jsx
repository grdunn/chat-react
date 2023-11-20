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
    <div className="chats h-full overflow-auto mt-10">
      {chats?.map((chat) => (
        <div
          className="userChat flex items-center hover:cursor-pointer"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <div className=""></div>
          <div className="userChatInfo mb-5">
            <p className="font-medium mb-1">{chat[1].userInfo.displayName}</p>
            <p className="text-sm">{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
