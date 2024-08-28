import React, { useState } from 'react';
import styles from './SongPlayer.module.css';
import coverImage from '../../assets/test-coverimage.jpg'
import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';
import { ReactComponent as WashitapeIcon } from '../../assets/washitape.svg';


function SongPlayer() {

  return (
    <div>
      <div className={styles.songplayerContainer}>
        <div className={styles.tapedContainer}>
        {/*Album Picture*/}
          <img className={styles.albumCover} src={coverImage}/>
          {/*Washitappe for the Album Picture*/}
          <WashitapeIcon className={styles.WashitapeIcon} id={styles.washi1}/>
          <WashitapeIcon className={styles.WashitapeIcon} id={styles.washi2}/>
          <WashitapeIcon className={styles.WashitapeIcon} id={styles.washi3}/>
          <WashitapeIcon className={styles.WashitapeIcon} id={styles.washi4}/>
        </div>
      {/*Play/Pause button*/}
        <div className={styles.textContainer}>
          <PlayIcon className={styles.iconPlay}/>
          <div className={styles.font}>
            <div className={styles.nameSong}>Nombre Cancion</div>
            <div className={styles.nameArtist}>Nombre Artista</div>
            <div className={styles.nameAlbum}>Nombre Album</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongPlayer;