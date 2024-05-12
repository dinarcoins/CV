import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import clx from './style.module.css';

import { ourTeamSlider } from './info';

import { ArrowNextSlick } from 'components/icons/arrow-slider/arrow-right-slick';
import { ArrowPrevSlick } from 'components/icons/arrow-slider/arrow-left-slick';
import Image from 'next/image';

export default function OurTeamSlider() {
  function SampleNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div className={clx.nextArrow} onClick={onClick}>
        <ArrowNextSlick />
      </div>
    );
  }

  function SamplePrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div className={clx.prevArrow} onClick={onClick}>
        <ArrowPrevSlick />
      </div>
    );
  }

  const sliderOurTeam = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={clx.ourTeamSlider}>
      <div className="container-custom">
        <div className={clx.ourTeamSlider_content}>
          <Slider {...sliderOurTeam}>
            {ourTeamSlider.map(
              ({ src, nameText, altImg, skills, position }, key) => (
                <div className={clx.ourTeamSlider_box} key={key}>
                  <div className={clx.ourTeamSlider_items}>
                    <div className={clx.ourTeamSlider_items_img}>
                      <Image src={src} alt={altImg} placeholder='blur' blurDataURL={src} layout="fill" />
                    </div>
                    <div className={clx.ourTeamSlider_modal}>
                      <div>Skill : {skills}</div>
                      <div>Position : {position}</div>
                    </div>
                  </div>
                  <p className={clx.ourTeamSlider_items_name}>{nameText}</p>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
