import React, { useState } from 'react';
import styles from './Track.module.css';
import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';
import { ReactComponent as AddIcon } from '../../assets/add-button.svg';

function Track() {

  return (
    <>
    <div>
        {/*For every song that appears in the search*/}
        <div className={styles.trackContainer}>
          <div className={styles.font}>
            <div className={styles.nameSong}>Nombre Cancion</div>
            <div className={styles.nameArtist}>Nombre Artista</div>
            <div className={styles.nameAlbum}>Nombre Album</div>
          </div>
          {/*Buttons add and play*/}
          <div className={styles.iconsContainer}>
            <PlayIcon className={styles.icon} />
            <AddIcon className={styles.icon} />
          </div>
        </div>
        <hr/>
    </div>
  </>
  );
}

export default Track;