import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const Dropdown = () => {
    return (
      <label htmlFor={label}>
        {label}:
        <select
          id={label}
          value={label}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={state.length === 0}
        >
          {options.map(optionString => (
            <option
              value={optionString}
              key={optionString.replace(" ", "").toLowerCase()}
            >
              {optionString}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, setState, Dropdown];
};

export default useDropdown;
