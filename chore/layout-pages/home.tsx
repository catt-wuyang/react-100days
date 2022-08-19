import "./style.css";
import React from "react";

const Home: React.FC = function () {
  return (
    <div>
      <h2>border 0.5px</h2>
      <div className="rectangle"></div>
      <div className="square"></div>
      <div className="triangle"></div>

      <h2>line 0.5px</h2>
      <div className="thinline"></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1px">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="#000"></line>
      </svg>

      <h2>font-size 12px</h2>
      <div className="font">
        <p>This is a function component</p>
        <p>书桌上面有什么</p>
      </div>
      <div className="font min-font">
        <p>This is a function component</p>
        <p>书桌上面有什么</p>
      </div>

      <h2>sigle line omitted</h2>
      <div className="text-block">
        <p className="sigle-line">
          书桌上面有什么，有台灯、显示器、音响、鼠标、电脑、键盘、水杯、书、笔记本、中性笔、
        </p>
      </div>

      <h2>multiline line omitted</h2>
      <div className="text-block">
        <p className="mul-line">
          书桌上面有什么，有台灯、显示器、音响、鼠标、电脑、键盘、水杯、书、笔记本、中性笔、
        </p>
      </div>

      <h2>two layout - flex</h2>
      <div className="rec-container rec-flex-container">
        <div className="rec-aside rec-flex-aside">aside</div>
        <div className="rec-content rec-flex-content">content</div>
      </div>

      <h2>two layout - float</h2>
      <div className="rec-container rec-float-container">
        <div className="rec-aside rec-float-aside">aside</div>
        <div className="rec-content rec-float-content">content</div>
      </div>

      <h2>three layout - flex</h2>
      <div className="rec-container rec-flex-container">
        <div className="rec-aside ret-flex-left">left</div>
        <div className="rec-content rec-flex-content">content</div>
        <div className="rec-aside ret-flex-right">right</div>
      </div>

      <h2>three layout - position</h2>
      <div className="rec-container rec-pos-container">
        <div className="rec-aside rec-pos-left">left</div>
        <div className="rec-content rec-pos-middle">content</div>
        <div className="rec-aside rec-pos-right">right</div>
      </div>
    </div>
  );
};

export default Home;
