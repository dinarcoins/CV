import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroBannerMobile.module.css';

function VideoBannerMobile() {
  const videoRef1 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef1.current?.play();
    }, 100);
  }, []);

  return (
    <>
      <div className={styles.videoAnimation}>
        <video
          className={styles.videoIntro}
          src="/intro2.mp4"
          muted
          playsInline
          preload="auto"
          loop
          ref={videoRef1}
          controls={false}
        />
      </div>
    </>
  );
}

export default VideoBannerMobile;
