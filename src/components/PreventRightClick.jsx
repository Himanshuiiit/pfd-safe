"use client";

const PreventRightClick = ({ children }) => {
  return <div onContextMenu={(e) => e.preventDefault()}>{children}</div>;
};

export default PreventRightClick;
