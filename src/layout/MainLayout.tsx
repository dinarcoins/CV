import React from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import clx from './MainLayout.module.css';

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className={clx.page}>
      <Header />
      <div className={clx.content}>{children}</div>
      <Footer />
    </div>
  );
}

export { MainLayout };
