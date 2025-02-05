import React from "react";

function TrashIcon({ color = "#EE3C4D", ...props }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4H2v2c.736 0 1.333.597 1.333 1.334V10c0 1.886 0 2.829.586 3.415C4.505 14 5.448 14 7.333 14h1.334c1.885 0 2.828 0 3.414-.585.586-.586.586-1.53.586-3.415V7.334C12.667 6.597 13.264 6 14 6V4zM7 7.334a.667.667 0 00-1.333 0v3.333a.667.667 0 101.333 0V7.334zm3.333 0a.667.667 0 10-1.333 0v3.333a.667.667 0 101.333 0V7.334z"
        fill={color}
      />
      <path
        d="M6.712 2.247c.076-.07.243-.133.476-.178C7.421 2.024 7.706 2 8 2c.293 0 .579.024.811.07.233.044.4.106.477.177"
        stroke={color}
        strokeWidth={1.33333}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default TrashIcon;
