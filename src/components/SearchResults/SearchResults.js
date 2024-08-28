import React, { useState } from 'react';
import Track from '../Track/Track';
import styles from './SearchResults.module.css';

function SearchResults() {

  return (
  <div className={styles.resultsContainer}>
    {/*Result box with songs appeared on the search*/}
    <h2 className={styles.h2}>Results</h2>
    <br></br>
    <Track/>
  </div>
  );
}

export default SearchResults;