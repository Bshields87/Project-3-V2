import React from "react";

const GymContainer = ({ children, style }) => (
  <div className="gymMenu" style={style}>
    {children}
  </div>
);

export default GymContainer;
