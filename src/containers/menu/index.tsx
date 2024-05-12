import Link from 'next/link';
import React, { useState } from 'react';

import style from './style.module.css';

export default function MenuContainer() {
  const [active, setActive] = useState(Boolean);

  const menuList = [
    { href: '/', value: 'The services' },
  ];

  return (
    <div className={style.menu}>
      <div className="container-custom">
        <div className={style.menu_list}>
          <ul className={style.menu_list_ul}>
            {menuList.map(({ value, href }, key) => (
              <li key={key}>
                <Link href={href}>
                  <a>{value}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
