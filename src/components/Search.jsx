import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      setUser(doc.data());
    } catch (err) {
      setErr(err);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {};

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Find a user"
        onKeyDown={handleKey}
        onChange={(e) => setUsername(e.target.value)}
      />
      {err && <span>{err}</span>}
      {user && (
        <div>
          <button onClick={handleSelect}>{user.displayName}</button>
        </div>
      )}
    </div>
  );
};

export default Search;
