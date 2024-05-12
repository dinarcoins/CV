import Button from 'components/button/Button';
import Link from 'next/link';
import React from 'react';
import OurTeamSlider from './OurTeamSlider';
import clx from './style.module.css';

export default function OurTeam() {
  const ourTeamMember = [
    { number: '02', text: 'managerment' },
    { number: '03', text: 'mobile team' },
    { number: '02', text: 'back - end team' },
    { number: '05', text: 'front - end team' },
    { number: '02', text: 'design team' },
    { number: '04', text: 'marketing team' },
  ];

  return (
    <section className={clx.ourTeam}>
      <div className={clx.ourTeam_header}>
        <div className="container-custom">
          <div className={clx.ourTeam_header_content}>
            <p>member</p>
            <p>
              OPAI Agency is a company of young enthusiasts developers, who
              falls in love with software and hardware projects.
            </p>
            <span>+ 20</span>
          </div>
        </div>
      </div>
      <div className={clx.ourTeam_content}>
        <div className={clx.ourTeam_title}>our team</div>
        <OurTeamSlider />
        <div className={clx.ourTeam_detail}>
          {ourTeamMember.map(({ number, text }, key) => (
            <div key={key}>
              <p className={clx.ourTeam_number}>{number}</p>
              <p className={clx.ourTeam_text}>{text}</p>
            </div>
          ))}
        </div>
        <div className={clx.ourTeam_button}>
          <Link href="/">
            <Button type="button">join us</Button>
          </Link>
        </div>
      </div>
      <div className={clx.ourTeam_footer}>
        <div className={clx.ourTeam_footer_text}>
          We bring you the best products
        </div>
        <div className={clx.ourTeam_footer_text2}>
          We bring you the best products
        </div>
      </div>
    </section>
  );
}
