import React, { useEffect, useState } from "react";

import { ReactComponent as SearchIcon } from "../../assets/search icon.svg";
import styles from "./SearchBar.module.css";

function SearchBar( {setTracks} ) {
  const [userInput, setUserInput] = useState("");

  console.log("user input", userInput);

  const API_URL = "https://api.spotify.com/v1/search";

  const query = new URLSearchParams({
    q: `track:${userInput}`,
    type: "track",
    limit: "15",
  });

  const spotifyToken = localStorage.getItem("spotifyToken");

  const getTracks = async () => {
    const requestUrl = `${API_URL}?${query.toString()}`;
    const response = await fetch(requestUrl, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });

    const data = await response.json();
    console.log("=====DATA=====", data);
    setTracks(data.tracks.items);
    
  };

  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.inputContainer}>
        <input
          className={styles.searchBar}
          placeholder="Search for songs for your playlist..."
          name="searchInput"
          id="searchInput"
          type="text"
          required
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
      </div>
      <button onClick={getTracks} type="button" className={styles.searchBtn}>
        Search
        <SearchIcon className={styles.searchIcon} />
      </button>
    </div>
  );
}

export default SearchBar;
