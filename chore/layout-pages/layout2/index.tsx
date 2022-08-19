import "./style.css";
import React from "react";

const Layout2: React.FC = function () {
  return (
    <div>
      <h2>layout2</h2>
      <div className="container">
        <div className="header">header</div>
        <div className="content">
          <div className="aside">aside</div>
          <div className="block">block</div>
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default Layout2;
