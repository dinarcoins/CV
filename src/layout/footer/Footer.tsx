import React from 'react';
import Link from 'next/link';

import clx from './Footer.module.css';

export function Footer() {
  const infos = [
    { href: 'tel:(+84)', value: '(+84)-123456789' },
    {
      href: 'mailto:i',
      value: 'info@opaiagency.com',
    },
    { href: '/', value: 'Da Nang' },
  ];

  return (
    <footer className={clx.footer}>
      <div className="container-custom">
        <div className={clx.footer_content}>
          <div className={clx.footer_location}>
            <div className={clx.footer_location_text}>viet nam</div>
          </div>
          <div className={clx.footer_about}>
            <ul className={clx.footer_about_ul}>
              {infos.map((items, key) => {
                return (
                  <li key={key}>
                    <Link href={items.href}>
                      <a>{items.value}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={clx.footer_copyright}>
            <Link href="/">
              <a>
                © {new Date().getFullYear()} Opai Agency Company
                Right Reserved
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
