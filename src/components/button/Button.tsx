import React from 'react';
import clx from './button.module.css';

type IButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: 'submit' | 'button' | 'reset';
};

const Button: React.FC<IButtonProps> = ({ type, children, onClick }) => {
  return (
    <button className={clx.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
