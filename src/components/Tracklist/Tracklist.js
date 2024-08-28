import React, { useState } from 'react';
import styles from './Tracklist.module.css';
import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';
import { ReactComponent as RemoveIcon } from '../../assets/delete-button.svg';

function Tracklist() {

  return (
    <div>
      <div className={styles.trackContainer}>
        {/*For every song that appears in the search*/}
        <div className={styles.font}>
              <div className={styles.nameSong}>Nombre Cancion</div>
              <div className={styles.nameArtist}>Nombre Artista</div>
              <div className={styles.nameAlbum}>Nombre Album</div>
        </div>
        {/*Buttons add and play*/}
        <div className={styles.iconsContainer}>
          <PlayIcon className={styles.icon}/>
          <RemoveIcon className={styles.icon}/>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default Tracklist;