import React from "react";
import Components from "./componentIndex";

const DisplayPage = function () {
  const hash = window.location.hash.split("/");
  const id = hash[1] || "001";
  const ComponentRender = Components[id];

  return (
    <div className="display-page">
      <h1>{id}</h1>
      <ComponentRender />
    </div>
  );
};

export default DisplayPage;
