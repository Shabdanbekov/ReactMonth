import React from "react";
import "./SwitchTheme.css";

const Switch = ({ onChange, checked }) => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
