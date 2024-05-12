import React from 'react';
import ContentSlide from './ContentSlide';
import clx from './style.module.css';

export default function Comments() {
  return (
    <section className={clx.comments}>
      <div className="container-custom">
        <div className={clx.comments_content}>
          <div className={clx.comments_title}>
            <div>What our </div>
            <div>clients</div>
            <div>Say about us</div>
          </div>
          <ContentSlide />
        </div>
      </div>
    </section>
  );
}
