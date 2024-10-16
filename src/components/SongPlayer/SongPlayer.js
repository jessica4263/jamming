import React, { useState } from 'react';
import styles from './SongPlayer.module.css';
import coverImage from '../../assets/test-coverimage.jpg'
import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';
import { ReactComponent as WashitapeIcon } from '../../assets/washitape.svg';


function SongPlayer({ token, trackUrl }) {

  return (
    <>
      <div className={styles.songplayerContainer}>
        <div className={styles.tapedContainer}>
          {/*Washitappe for the Album Picture*/}
          <WashitapeIcon className={styles.WashitapeIcon} id={styles.washi1} />
          <WashitapeIcon className={styles.WashitapeIcon} id={styles.washi2} />
          <iframe
            src={trackUrl}
            className={styles.iframe}
            allowTransparency="true"
            allow="encrypted-media"
            title="Spotify player"
          />
        </div>
      </div>
    </>
  );
}

export default SongPlayer;
