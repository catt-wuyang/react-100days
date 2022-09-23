import "./style.css";
import React from "react";
import classnames from "classnames";
import axios from "axios";

function SelectorModal(props) {
  const { visible } = props;
  return <div>group-selector-modal</div>;
}

SelectorModal.defaultProps = {
  visible: false,
};

export default SelectorModal;
