import React, { useState } from 'react';
import Track from '../Track/Track';
import styles from './SearchResults.module.css';
import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';
import { ReactComponent as AddIcon } from '../../assets/add-button.svg';

function SearchResults({ tracks, addToPlaylist }) {
  console.log('SEARCHRESULT tracks', tracks)

  function playSong(){

  }

  return (
    <div className={styles.resultsContainer}>
      {/*Result box with songs appeared on the search*/}
      <h2 className={styles.h2}>Results</h2>
      <br />
      {tracks.map((track) => (
        <div>
          <div className={styles.trackContainer}>
            <Track
              key={track.id}
              name={track.name}
              artist={track.artists[0]?.name}
              album={track.album.name} 
            /> 
            {/*Buttons add and play*/}
            <div className={styles.iconsContainer}>
              <PlayIcon onClick={playSong} className={styles.icon} />
              <AddIcon onClick={() => addToPlaylist(track)} className={styles.icon} />
            </div> 
          </div>
          <hr />
        </div>
    ))}
    </div>
  );
}

export default SearchResults;