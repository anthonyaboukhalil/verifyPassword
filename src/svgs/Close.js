import React from "react";
const Close = ({ status }) => {
  return (
    <svg
      id="i-close"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="10"
      height="10"
      fill="none"
      stroke="currentcolor"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      className={`text-danger ${
        status === "success" ? "d-none" : ""
      } align-middle`}
    >
      <path d="M2 30 L30 2 M30 30 L2 2" />
    </svg>
  );
};

export default Close;
