import React, { useState } from 'react';
import styles from './Track.module.css';

function Track({ name, artist, album }) {

  return (
    <>
      {/*For every song that appears in the search*/}
      <div className={styles.font}>
        <div className={styles.nameSong}>{name}</div>
        <div className={styles.nameArtist}>{artist}</div>
        <div className={styles.nameAlbum}>{album}</div>
      </div>
    </>
  );
}

export default Track;
