import Image from 'next/image';
import React from 'react';
import clx from './style.module.css';

export default function AboutUsBanner() {
  const aboutUsShow = [
    { text: 'years', number: '3+' },
    { text: 'clients', number: '20+' },
    { text: 'projects', number: '40+' },
  ];

  return (
    <section className={clx.aboutUs_banner}>
      <div className="container-custom">
        <div className={clx.heroBanner}>
          <div className={clx.aboutUs_banner_content}>
            <div className={clx.banner_custom}>
              <Image src="/banner.png" layout="fill" alt="banner" />
            </div>
            <div className={clx.aboutUs_title}>
              <div className={clx.aboutUs_title_items1}>about</div>
              <div className={clx.aboutUs_title_items2}>
                <p>u</p>
                <p>s</p>
              </div>
            </div>
            <div className={clx.aboutUs_text}>
              <p>
                OPAI Agency is a firm with
                <span> more than 4 years of expertise </span>
                in R{'&'}D, software, hardware, cross- platform mobile, and
                DevOps. The success of the firm is established by a group of
                <span> youthful, enthused, and innovative </span> workers.
              </p>
              <p>
                Developed by developers, researchers, and QA, we not only focus
                on the development but also on providing solutions, system
                architecture, technical support, and long-term maintenance.
              </p>
              <p>
                With the <span>REASONABLE - QUALITY</span> criterion, Digital
                Fortress is always confident in delivering flawless goods and
                exceeding business partners expectations.
              </p>
            </div>
            <div className={clx.aboutUs_show}>
              {aboutUsShow.map(({ text, number }, key) => {
                return (
                  <div key={key}>
                    <div className={clx.aboutUs_show_text}>{text}</div>
                    <span className={clx.aboutUs_show_number}>{number}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
