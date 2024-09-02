import React, { useState } from 'react';
import Track from '../Track/Track';
import styles from './SearchResults.module.css';

function SearchResults({ tracks }) {
  console.log('SEARCHRESULT tracks', tracks)
  return (
    <div className={styles.resultsContainer}>
      {/*Result box with songs appeared on the search*/}
      <h2 className={styles.h2}>Results</h2>
      <br />
      {tracks.map((track) => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artists[0]?.name}
          album={track.album.name} 
        />  
    ))}
    </div>
  );
}

export default SearchResults;