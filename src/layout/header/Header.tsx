import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clx from "./Header.module.css";
import clsx from "clsx";
import { useGetIsSmallScreen } from "hooks/useGetIsSmallScreen";

const menuList = [
  { href: '/', value: 'the services' },
  { href: '/about-us', value: 'about us' },
  { href: '/contact-us', value: 'contact' },
];

export function Header() {
  const [show, setShow] = useState(false);
  const [buttonChange, setButtonChange] = useState(true);
  const [clickMenu, setClickMenu] = useState(false);

  const toggleMenu = () => {
    if (!(show && clickMenu)) {
      setClickMenu(true);
    }
    document.body.style.overflow = show ? "unset" : "hidden";
    setShow((s) => !s);
    setButtonChange((s) => !s);
  };

  const revertMenu = () => {
    setShow(false);
    setButtonChange((s) => !s);
    document.body.style.overflow = "unset";
  };

  const isSmallScreen = useGetIsSmallScreen()

  return (
    <header className={clx.header}>
      <div className="container-custom">
        <div className={clx.header_content}>
          <div className={clx.logo}>
            <Link href="/" passHref>
              <a aria-label="logo" target="_self" rel="noopener">
                <Image
                  src="/img/logo3.png"
                  width={isSmallScreen ? 150 : 200}
                  height={isSmallScreen ? 100 : 150}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className={clx.header_items}>
            <div className={clx.buttonMenu} onClick={toggleMenu}>
              {buttonChange ? (
                <div className={clx.hamburger}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <div className={clx.hamburger_close}>
                  <div></div>
                  <div></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx([clx.menu], {
          [clx.header_menu_list]: show,
          [clx.header_menu_list2]: clickMenu && !show,
        })}
      >
        <ul className={clx.header_menu_list_ul}>
          {menuList.map(({ value, href }, key) => (
            <li onClick={revertMenu} key={key}>
              <Link href={href} passHref>
                <a>{value}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
