import "./style.css";
import React from "react";

const Layout3: React.FC = function () {
  return (
    <div>
      <h2>layout3</h2>
      <div className="container">
        <div className="aside">aside</div>
        <div className="block">
          <div className="header">header</div>
          <div className="content">content</div>
          <div className="footer">footer</div>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
