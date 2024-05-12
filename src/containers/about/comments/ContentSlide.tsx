import React from 'react';
import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import clx from './style.module.css';

import { contentSlide } from './feedbackList';

export default function ContentSlide() {
  const sliderImage = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: `slick-dots ${clx.dots} ${clx.slick_active}`,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className={clx.comments_slide}>
      <Slider {...sliderImage}>
        {contentSlide.map(({ text, author, src, alt }, key) => {
          return (
            <div key={key} className={clx.comments_text}>
              <p>{text}</p>
              <div>{author}</div>
              <div className={clx.img_custom}>
                <Image src={src} alt={alt} layout="fill" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
