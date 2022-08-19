import "./style.css";
import React from "react";

const Layout4: React.FC = function () {
  return (
    <div>
      <h2>layout1</h2>
      <div className="container">
        <div className="header">header</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default Layout4;
