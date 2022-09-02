import "./style.css";
import React, { useRef, useState } from "react";

const OPTIONS = [
  {
    text: "A",
    value: "a",
  },
  {
    text: "B",
    value: "b",
  },
];

const Selected = function ({ defaultText, text, selected }) {
  const selectedText = selected ? text : defaultText;
  return <div>{selectedText}</div>;
};

const _onSelect = function (...args) {
  console.log(args);
};

const Options = function ({ prefix, options }) {
  return (
    <ul className={`${prefix}-select-options`}>
      {options.map((option, index) => {
        if (option) {
          return (
            <li
              key={`option_${option.value}`}
              className="simulate-select-option"
              data-index={index}
              data-value={option.value}
              onClick={() => _onSelect({ options, option, index })}
            >
              {option.text}
            </li>
          );
        }
      })}
    </ul>
  );
};

const Select = function () {
  const [options, setOptions] = useState(OPTIONS);
  const [selected, setSelected] = useState(false);
  const selectRef = useRef();

  return (
    <div>
      <Selected text={"hello"} selected={true} />
      <select
        style={{ display: "none" }}
        ref={selectRef}
        value={selected ? "hello" : ""}
      >
        {options.map((option) => {
          return (
            <options
              key={`option_element_${option.value}`}
              value={option.value}
            >
              {option.text}
            </options>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
