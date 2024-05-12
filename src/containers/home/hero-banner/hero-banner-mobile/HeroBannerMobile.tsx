import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import Link from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowUp from 'components/icons/arrow-sliders-up';
import ArrowDown from 'components/icons/arrow-sliders-down';
import { OurProjects } from '../constants';

import styles from './HeroBannerMobile.module.css';
import VideoBannerMobile from './VideoBannerMobile';
import Button from 'components/button/Button';

type ButtonProps = {
  onClick?: () => void;
};

function HeroBannerMobile() {
  const [isShowContent, setIsShowContent] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  function appendDots(dots: Array<string>) {
    const [dot1, ...dot] = dots;

    return (
      <div>
        <ul className="dotsList">{isShowContent ? dot1 : dot}</ul>
      </div>
    );
  }

  function customPaging(i: number) {
    return <span className={clsx(styles.circleSlider, { dot: i <= 0 })} />;
  }

  const SlickArrowLeft = ({ onClick }: ButtonProps) => (
    <ArrowUp onClick={onClick} className={styles.arrowLeft} />
  );

  const SlickArrowRight = ({ onClick }: ButtonProps) => (
    <ArrowDown onClick={onClick} className={styles.arrowRight} />
  );

  const afterChangeHandle = (currentSlide: number) => {
    setCurrentPage(currentPage);
    setIsShowContent(currentSlide <= 0);
  };

  return (
    <section className={styles.heroBannerSection}>
      <div className={styles.wrapper}>
        {isShowContent ? (
          <span className={styles.titleHeight} />
        ) : (
          <div className={styles.title}>
            <span className={styles.whiteText}>THE</span>
            <span className={styles.redText}> PROJECT</span>
          </div>
        )}
        <VideoBannerMobile />
        {isShowContent ? (
          <span className={styles.detailHeight} />
        ) : (
          <span className={styles.detailWork}>See all work</span>
        )}

        <Slider
          nextArrow={<SlickArrowRight />}
          prevArrow={<SlickArrowLeft />}
          dots
          dotsClass={styles.dots}
          infinite={false}
          appendDots={appendDots}
          customPaging={customPaging}
          afterChange={afterChangeHandle}
        >
          <div className={styles.contentPanel}>
            <span className={styles.redTextTitle}>we bringing</span>
            <div className={styles.middleText}>
              <span className={styles.whiteTextTitle}>YOUR </span>
              <span className={styles.whiteTextTitle}>IDEAS</span>
              <div className={styles.btn_position}>
              <Link href="/contact-us" passHref>
                <Button type="button">contact</Button>
              </Link>
            </div>
            </div>
            <span className={styles.redTextTitle}>to real life</span>
           
          </div>

          {OurProjects.map((items, idx) => {
            return (
              <div key={idx} className={styles.contentRight}>
                <span className={styles.fieldNameClient}>{items.type}</span>
                <span className={styles.nameClient}>{items.owner}</span>
                <span className={styles.titleText}>{items.projectName}</span>
                <span className={styles.descriptionText}>
                  {items.description.map((item, idx) => (
                    <Fragment key={idx}>
                      {item}
                      <br />
                    </Fragment>
                  ))}
                </span>
                <button className={styles.viewDetail}>VIEW DETAILS</button>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default HeroBannerMobile;
