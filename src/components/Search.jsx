/** @format */

import React from "react";

const Search = () => {

  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  return (
    <div className="search">
      <input type="text" placeholder="Find a user" />
    </div>
  );
};

export default Search;
