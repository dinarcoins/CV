import React, { useCallback, useEffect } from 'react';
import ArrowDown from '../arrow-sliders-down';
import ArrowUp from '../arrow-sliders-up';
import styles from '../arrow-slider/ArrowSlider.module.css';

type Props = {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
};

export const debounce = (func:Function, timeout = 300) : Function => {
  let timer :NodeJS.Timeout
  return (...args :[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function ArrowSliders({ onNext, onPrevious, className }: Props) {

  return (
    <div className={styles.arrowSlider}>
      <ArrowUp onClick={onPrevious} className={className} />
      <span className={styles.circleSlider} />
      <ArrowDown onClick={onNext} className={className} />
    </div>
  );
}

export default ArrowSliders;
