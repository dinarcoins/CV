import React from 'react';
import clx from './style.module.css';

export default function OurStyle() {
  const ourStyleItems = [
    {
      title: 'strong',
      numberText: 1,
      children:
        'DF is a group that unites powerful individuals that transform obstacles into passions and always advance.',
    },
    {
      title: 'serius',
      numberText: 2,
      children:
        'DF upholds credibility at all times. Particularly, everyone here usually exhibits great levels of discipline at work.',
    },
    {
      title: 'ambitious',
      numberText: 3,
      children:
        'DF focuses on exploiting Outsourcing to gainaccess to new technologies and develop its own projects. This not only proves the strength of the business, but also increases the chances of dominating the IT industry.',
    },
    {
      title: 'cretive',
      numberText: 4,
      children:
        'A “special” working environment at DF is the condition for creating creative people at work. The members always carry a positive and relaxed energy.',
    },
  ];

  return (
    <section className={clx.ourStyle}>
      <div className="container-custom">
        <div className={clx.ourStyle_title}>our style</div>
        <div className={clx.ourStyle_content}>
          {ourStyleItems.map(({ title, children, numberText }, index) => (
            <div key={index} className={clx.ourStyle_items}>
              <div className={clx.ourStyle_items_title}>
                {title} <span>{numberText}</span>
              </div>
              <p>{children}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
