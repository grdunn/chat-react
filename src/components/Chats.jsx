import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  Object.entries(chats)?.map((chat) => {
    console.log(chat);
  });

  return (
    <div className="chats">
      <h3>Chats</h3>
      {Object.entries(chats)?.map((chat) => {
        return (
          <div key={chat[0]}>
            <span>{chat[1].userInfo.displayName}</span>
            <span>{chat[1].lastMessage?.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
