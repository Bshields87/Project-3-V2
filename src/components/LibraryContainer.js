import React from "react";

const LibraryContainer = ({ children, style }) => (
  <div className="libraryMenu" style={style}>
    {children}
  </div>
);

export default LibraryContainer;
