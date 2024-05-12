import ArrowDown from 'components/icons/arrow-down';
import React from 'react';
import clx from './style.module.css';

type IButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: 'submit' | 'button' | 'reset';
};

const ScrollButton: React.FC<IButtonProps> = ({ type, children, onClick }) => {
  return (
    <div className={clx.descriptionPanel}>
      <button type={type} className={clx.btnScroll} onClick={onClick}>
        {children}
      </button>
      <ArrowDown />
    </div>
  );
};

export default ScrollButton;
