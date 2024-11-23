'use client';

import React, { useState } from 'react';
import styles from './SideSphere.module.css';

interface SliderSphereProps {
  isDarkMode: boolean; // Define the prop
}

const SliderSphere: React.FC<SliderSphereProps> = ({ isDarkMode }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSliderValue(value);
  };

  return (
    <div
      className={`${styles.sliderContainer} ${isDarkMode ? styles.dark : ''}`}
    >
      <div className={styles.sliderTrack}>
        <div
          className={styles.sliderTrackFill}
          style={{ width: `${sliderValue}%` }}
        />
      </div>
      <div
        className={styles.sliderSphere}
        style={{ left: `${sliderValue}%` }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className={styles.slider}
      />
    </div>
  );
};

export default SliderSphere;
