import React, { useRef, useState } from "react";

const FormControl = function () {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [mulValue, setMulValue] = useState([]);

  function inputChange(e) {
    console.log("username", e.target.value);
    setInputValue(e.target.value);
  }

  function selectChange(e) {
    console.log("gender", e.target.value);
    setSelectValue(e.target.value);
  }

  function mulChange(e) {
    const val = e.target.value;
    const i = mulValue.indexOf(val);
    const newVal = i > -1 ? [...mulValue].splice(i, 1) : [...mulValue, val];
    console.log(newVal);
    setMulValue(newVal);
  }

  function submitHandle(e) {
    e.preventDefault();
    console.log("submit", inputValue, selectValue, mulValue);
  }

  return (
    <form onSubmit={submitHandle}>
      <input value={inputValue} onChange={inputChange} />

      <select value={selectValue} onChange={selectChange}>
        <option value="male">男</option>
        <option value="female">女</option>
      </select>

      <select multiple={true} value={mulValue} onChange={mulChange}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>

      <button type="submit">提交</button>
    </form>
  );
};

export default FormControl;

const Form = function () {
  const usenameRef = useRef();
  const genderRef = useRef();

  function submitHandle(event) {
    event.preventDefault();
    const username = usenameRef.current.value;
    const gender = genderRef.current.value;
    console.log("submit", username, gender);
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input name="usename" ref={usenameRef} />

        <select name="gender" ref={genderRef}>
          <option value="female">女</option>
          <option value="male">男</option>
        </select>
      </form>
    </div>
  );
};
