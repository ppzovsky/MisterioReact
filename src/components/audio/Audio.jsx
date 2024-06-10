import { useState, useRef } from 'react';
import music from '/src/assets/audio/WhisperintheShadows.mp3';
import { FaCompactDisc } from 'react-icons/fa'; 
import styles from './audio.module.css'; 

export default function Audio() {
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [volume, setVolume] = useState(1); 
  const audioRef = useRef(null);    

  function toggleVolumeControl() {
    setShowVolumeControl(prevState => !prevState);
  }

  function handleVolumeChange(event) {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }

  return (
    <div className={styles.audioContainer}>
      <div onClick={toggleVolumeControl} className={styles.toggleButton}>
        <FaCompactDisc className={volume > 0 ? styles.rotatingIcon : ''}/>
      </div>
      {showVolumeControl && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.volumeControl}
        />
      )}
      <audio ref={audioRef} loop autoPlay>
        <source src={music} type="audio/mpeg" />
        Seu navegador não suporta a tag de áudio.
      </audio>
    </div>
  );
}



