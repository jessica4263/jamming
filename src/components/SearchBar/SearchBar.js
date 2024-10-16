import React, { useEffect, useState } from "react";

import { ReactComponent as SearchIcon } from "../../assets/search icon.svg";
import styles from "./SearchBar.module.css";

function SearchBar({ setTracks, token }) {
  const [userInput, setUserInput] = useState("");

  const API_URL = "https://api.spotify.com/v1/search";

  const query = new URLSearchParams({
    q: `track:${userInput}`,
    type: "track",
    limit: "15",
  });

  const getTracks = async () => {
    const requestUrl = `${API_URL}?${query.toString()}`;
    const response = await fetch(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
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
      <button onClick={getTracks} type="submit" className={styles.searchBtn}>
        <div className={styles.search_btn_inside}>
          Search
          <SearchIcon className={styles.searchIcon} />
        </div>
      </button>
    </div>
  );
}

export default SearchBar;
