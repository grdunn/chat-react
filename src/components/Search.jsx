import React, { useState, useContext } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      // TODO: If no user is found, remove the previous user.
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        // is !res.exists()
      });
    } catch (err) {
      setErr(err);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // create a chat in chats collections
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }
      console.log('selected user: ' + user.photoURL);
      console.log('current user: ' + currentUser.displayName + ' : ' + currentUser.photoURL)
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    } catch (err) {
      setErr(err);
    }
    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="border-b">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="p-8 block w-full h-20 rounded-md border-none text-gray-900 ring-none ring-inset ring-gray-300 placeholder:text-gray-500 placeholder:font-light focus:ring-2 focus:ring-inset focus:ring-blue-100 sm:text-sm sm:leading-6"
        />
      </div>
      {err && <span>{err.message}</span>}
      {user && (
        <div>
          <button onClick={handleSelect}>{user.displayName}</button>
        </div>
      )}
    </div>
  );
};

export default Search;
