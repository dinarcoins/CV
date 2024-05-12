import React from 'react';

type Props = {
  onClick?: () => void;
  className?: string;
};

function ArrowDown({ onClick, className }: Props) {
  return (
    <svg
      width="12"
      height="25"
      viewBox="0 0 12 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M5.43431 24.5657C5.74673 24.8781 6.25326 24.8781 6.56568 24.5657L11.6569 19.4745C11.9693 19.1621 11.9693 18.6556 11.6569 18.3431C11.3444 18.0307 10.8379 18.0307 10.5255 18.3431L6 22.8686L1.47452 18.3431C1.1621 18.0307 0.655564 18.0307 0.343145 18.3431C0.0307256 18.6556 0.0307256 19.1621 0.343145 19.4745L5.43431 24.5657ZM5.2 -3.49692e-08L5.2 24L6.8 24L6.8 3.49692e-08L5.2 -3.49692e-08Z"
        fill="#C09357"
      />
    </svg>
  );
}

export default ArrowDown;
