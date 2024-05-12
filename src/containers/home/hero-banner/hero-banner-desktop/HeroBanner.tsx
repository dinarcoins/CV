import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import ArrowSliders from 'components/icons/arrow-slider/arrow-sliders';

import styles from './HeroBanner.module.css';
import { OurProjects } from '../constants';
import ScrollButton from 'components/scrollButton/ScrollBtn';
import Button from 'components/button/Button';

export const throttle = (func:Function, timeout = 300) => {
  let isRunFunc = true
  return (...args: []) => {
    if (isRunFunc) {
      isRunFunc = false
      func.apply(this, args)
    }
    setTimeout(() => {
      isRunFunc = true
    }, timeout)
  }
}

const TIMEOUT = 1000

export default function HeroBanner() {
  const [vidIndex, setVidIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const currentProjectIndex = useRef(projectIndex)

  useEffect(() => {
    videoRef1.current?.play();
    setTimeout(() => {
      setVidIndex(1);
      videoRef2.current?.play();
      setTimeout(() => {
        videoRef1.current?.remove();
      }, 300);
    }, 900);
  }, []);

  const onPrevSlide = useCallback(throttle(() => {
    if (currentProjectIndex.current > 0) {
      currentProjectIndex.current -= 1
      setProjectIndex(currentProjectIndex.current);
    }
  }, TIMEOUT),[])

  const onViewNextProject = useCallback(throttle(() => {
    if (currentProjectIndex.current < OurProjects.length) {
      currentProjectIndex.current += 1
      setProjectIndex(currentProjectIndex.current);
      setIsFirstTime(false);
    }
  }, TIMEOUT),[])

  useEffect(() => {
    const scroll = (e: WheelEvent) => {
      if (e.deltaY < 0)
      {
        onPrevSlide()
      }
      else if (e.deltaY > 0)
      {
        onViewNextProject()
      }
    }
    window.addEventListener("wheel", scroll)
    return () => window.removeEventListener("wheel", scroll)
  }, [])

  const renderProject = () => {
    const index = projectIndex - 1 < 0 ? 0 : projectIndex - 1;
    const project = OurProjects[index];

    if (project && !isFirstTime) {
      return (
        <div
          className={clsx(styles.contentRight, {
            [styles.showProject]: projectIndex > 0,
            [styles.fadeOutRight]: projectIndex === 0,
          })}
        >
          <span className={styles.fieldNameClient}>{project.type}</span>
          <span className={styles.nameClient}>{project.owner} </span>
          <span className={styles.titleText}>{project.projectName}</span>
          <span className={styles.descriptionText}>
            {project.description.map((item, idx) => (
              <Fragment key={idx}>
                {item}
                <br />
              </Fragment>
            ))}
          </span>
          <div
            className={clsx(styles.btnClick, {
              [styles.viewDetail]: !isFirstTime && projectIndex > 0,
            })}
          >
            <Button type="button">view details</Button>
          </div>
        </div>
      );
    }
    return null;
  };

  const isShowProjects = projectIndex > 0;

  return (
    <section className={styles.panelSection}>
      <ArrowSliders
        onNext={onViewNextProject}
        onPrevious={onPrevSlide}
        className={''}
      />
      <div
        className={clsx(styles.wrapper, {
          [styles.wrapper2]: !isFirstTime && projectIndex > 0,
        })}
      >
        <div
          className={clsx(styles.videoAnimation, {
            [styles.videoAnimationPage2]: !isFirstTime && projectIndex > 0,
          })}
        >
          <video
            className={styles.videoIntro}
            src="/intro2.mp4"
            autoPlay
            muted
            ref={videoRef1}
            controls={false}
          />
            <video
              className={clsx(styles.videoIntro, {
                [styles.fadeInTopRight]: isShowProjects,
                [styles.fadeInBottomLeft]: !isFirstTime && projectIndex === 0,
              })}
              style={{ opacity: vidIndex }}
              src="/intro2.mp4"
              muted
              loop
              ref={videoRef2}
              controls={false}
            />
          <div className={clsx(styles.fadeInTopRight, styles.spanVideo)}>
            <span
              className={clsx(styles.isShowDetailWork, {
                [styles.detailWork]: projectIndex > 0,
                [styles.fadeOut]: !isFirstTime && projectIndex === 0,
              })}
            >
              See all work
            </span>
          </div>
        </div>

        {renderProject()}
        <div
          className={clsx(styles.contentPanel, {
            [styles.fadeOutDown]: isShowProjects,
            [styles.fadeInUp]: !isFirstTime && projectIndex === 0,
          })}
        >
          <span className={styles.redTextTitle}>we bringing</span>
          <div className={styles.middleText}>
            <div className={styles.whiteTextTitle}>OPAI Agency</div>
            <div className={styles.btn_show}>
              <Link href="/contact-us" passHref>
                <Button type="button">contact</Button>
              </Link>
            </div>
          </div>
          <span className={styles.redTextTitle}>to real life</span>
        </div>
        <ScrollButton type="button" onClick={onViewNextProject}>
          Scroll to see our projects
        </ScrollButton>
      </div>
    </section>
  );
}
