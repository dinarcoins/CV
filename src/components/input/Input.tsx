import React from 'react';
import clx from './input.module.css';

type IInputProps = {
  type?: string;
  name?: string;
  value: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<IInputProps> = ({ className, ...props }) => {
  return (
    <>
      <div className={clx.content}>
        <input className={clx.input} {...props} />
        <span className={clx.border_input} />
      </div>
    </>
  );
};

export default Input;
