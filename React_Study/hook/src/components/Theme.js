import React, { useState } from "react";
import toggleStyle from "./css/Toggle.module.css";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle((status) => !status);
  };
  return (
    <div
      className={`${toggleStyle.outer} ${toggle ? toggleStyle.darkTheme : ""}`}
    >
      <h1 className={toggleStyle.title}>Theme</h1>
      <div className={toggleStyle.toggleContainer} onClick={onToggle}>
        <div
          className={` ${toggleStyle.toggle} ${
            toggle ? toggleStyle.togglecheck : ""
          }`}
        />
        <div
          className={`${toggleStyle.toggleCircle} ${
            toggle ? toggleStyle.togglecheck : ""
          }`}
        />
      </div>
    </div>
  );
}

export default Toggle;
