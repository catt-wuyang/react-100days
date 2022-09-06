import "./style.css";
import React, { useEffect } from "react";

function Child({ name, sayName }) {
  useEffect(() => {
    console.log("componentDidMount", name);
    sayName(name);
  });

  return (
    <div>
      <div>child</div>
      <button onClick={() => sayName(name)}>{name}</button>
    </div>
  );
}

function Parent() {
  function sayNameHandle(childName) {
    console.log("====");
    console.log(childName);
  }

  return (
    <div>
      <div>parent</div>
      <Child name={"parent to child info"} sayName={sayNameHandle} />
    </div>
  );
}

export default Parent;
