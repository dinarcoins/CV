import React from 'react';
import clx from './style.module.css';
import AboutUsBanner from './aboutUsBanner/AboutUsBanner';
import Comments from './comments/Comments';
import OurTeam from './ourTeam/OurTeam';
import OurStyle from './ourStyle/OurStyle';

export default function AboutUsContainer() {
  return (
    <div className={clx.aboutUs}>
      <AboutUsBanner />
      <Comments />
      <OurTeam />
      <OurStyle />
    </div>
  );
}
