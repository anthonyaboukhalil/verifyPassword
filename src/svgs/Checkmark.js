import React from "react";

const Checkmark = ({ status }) => {
  return (
    <svg
      id="i-checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="10"
      height="10"
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`text-success ${status === "success" ? "" : "d-none"}`}
    >
      <path d="M2 20 L12 28 30 4" />
    </svg>
  );
};

export default Checkmark;
