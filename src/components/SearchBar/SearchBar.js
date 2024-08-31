import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search icon.svg';
import { redirectToSpotify } from '../Auth';

function SearchBar() {
  const [accessToken, setAccessToken] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Check if there's an access token in localStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const handleLogin = () => {
    redirectToSpotify();
  };

  const handleSearch = async () => {
    if (!accessToken) {
      console.log('No access token found. Redirecting to Spotify...');
      handleLogin(); // Redirect to Spotify login if no token is available
      return;
    }

    // Proceed with the search if the user is authenticated
    try {
      console.log('Searching for:', query);
      const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Search results:', data); // Process the search results here
      } else {
        console.error('Error fetching search results', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.searchbarContainer}> 
      <div className={styles.inputContainer}>     
        <input 
          className={styles.searchBar} 
          placeholder='Search for songs for your playlist...'
          name='searchInput'
          id='searchInput'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <label htmlFor='searchInput'>
          <SearchIcon className={styles.searchIcon} />
        </label>
      </div>
      <button 
        type='button' 
        className={styles.searchBtn}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
