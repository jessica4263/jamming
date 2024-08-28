import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search icon.svg';

function SearchBar() {

  return (
    <div className={styles.searchbarContainer}> 
      <div className={styles.inputContainer}>     
        <input className={styles.searchBar} placeholder='Search for songs for your playlist..'></input>
        <SearchIcon className={styles.searchIcon}/>
      </div>
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
}

export default SearchBar;