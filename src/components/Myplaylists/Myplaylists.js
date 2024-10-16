import Track from '../Track/Track';
import React, { useState } from 'react';
import styles from './Myplaylists.module.css';
import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';

function MyPlaylists({ myPlaylist, handlePlay }) {
  const [displayPlaylist, setDisplayPlaylist] = useState([]);

  function handleDisplay(playlist) {
    setDisplayPlaylist(playlist);
  }

  return (
    <div className={styles.myPlaylistContainer}>
      <h2>My Playlists</h2>
      {/* Container for playlists listing and displayed playlists */}
      <div className={styles.displayContainer}>
        {/* The list of the saved playlists will appear here. */}
        <div className={styles.playlistNamesContainer}>
          {myPlaylist.map((playlist) => (
            <div onClick={() => handleDisplay(playlist)} className={styles.playlistNames}>
              {playlist.name}
            </div>
          )
          )}
        </div>
        {/* The display of the saved playlists will appear here. */}
        <div className={styles.displayPlaylistsContainer}>
          <h2 className={styles.displayName}>{displayPlaylist.name}</h2>
          {displayPlaylist["songs"]?.map((song) => (
            <div>
              <div className={styles.trackContainer}>
                <Track
                  key={song.id}
                  name={song.name}
                  artist={song.artists[0]?.name}
                  album={song.album.name}
                />
                <div className={styles.iconsContainer}>
                  <PlayIcon onClick={() => handlePlay(song.id)} className={styles.icon} />
                </div>
              </div>
              <hr />
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default MyPlaylists;
