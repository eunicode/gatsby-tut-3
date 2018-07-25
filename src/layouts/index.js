import React from "react";

// Notice that unlike most children props, the children prop passed to layout 
// components is a function and needs to be executed
// children()

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h3>MySweetSite</h3>
    {children()}
  </div>
);
