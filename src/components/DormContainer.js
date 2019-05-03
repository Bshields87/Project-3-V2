import React from "react";

const DormContainer = ({ children, style }) => (
  <div className="dormMenu" style={style}>
    {children}
  </div>
);

export default DormContainer;
