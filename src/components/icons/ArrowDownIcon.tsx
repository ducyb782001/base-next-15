import React from "react";

function ArrowDownIcon({ color = "#F76831", ...props }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.808 14.77l-3.715-4.458A.8.8 0 018.708 9h6.584a.8.8 0 01.614 1.312l-3.714 4.458a.25.25 0 01-.384 0z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowDownIcon;
