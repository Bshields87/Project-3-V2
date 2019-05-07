import React from "react";

const CafeteriaContainer = ({ children, style }) => (
  <div className="cafeteriaMenu" style={style}>
    {children}
  </div>
);

export default CafeteriaContainer;
