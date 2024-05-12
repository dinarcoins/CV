import React from 'react';
import clx from './style.module.css';

export function VideoProduct() {
  return (
    <iframe
      className={clx.custom_iframe}
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/8h6ZdWveisc?start=0"
      title="Product Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
