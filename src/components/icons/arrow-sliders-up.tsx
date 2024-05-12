import React from "react";
type Props = {
  onClick?: () => void;
  className?:string;
};
function ArrowUp({ onClick,className }: Props) {
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
        d="M5.43431 0.434313C5.74673 0.121893 6.25326 0.121893 6.56568 0.434313L11.6569 5.52548C11.9693 5.8379 11.9693 6.34443 11.6569 6.65685C11.3444 6.96927 10.8379 6.96927 10.5255 6.65685L6 2.13137L1.47452 6.65685C1.1621 6.96927 0.655564 6.96927 0.343145 6.65685C0.0307256 6.34443 0.0307256 5.8379 0.343145 5.52548L5.43431 0.434313ZM5.2 25L5.2 0.999998L6.8 0.999998L6.8 25L5.2 25Z"
        fill="#C09357"
      />
    </svg>
  );
}

export default ArrowUp;
