// Generated with util/create-component.js
import React from "react";

import { AutoCompleteProps } from "./AutoComplete.types";
import "./AutoComplete.scss";
import classNames from "classnames";

const AutoComplete = ({
  labelId,
  labelText,
  options,
  onSearchFunction,
}: AutoCompleteProps) => (
  <div
    data-testid="AutoComplete"
    className={classNames({
      "dcui-autocomplete": true,
    })}
    id="ex1"
  >
    <label
      htmlFor="ex1-input"
      id="ex1-label"
      className="dcui-autocomplete__label"
    >
      {labelText}
    </label>
    <div className="dcui-autocomplete__wrapper">
      <div
        role="combobox"
        aria-expanded="true"
        aria-owns="ex1-listbox"
        aria-haspopup="listbox"
        id="ex1-combobox"
      >
        <input
          type="text"
          aria-autocomplete="list"
          aria-controls="ex1-listbox"
          id="ex1-input"
          aria-activedescendant=""
          onChange={(e) => {
            e.preventDefault();
            onSearchFunction(e.target.value);
          }}
        />
      </div>
      <ul
        aria-labelledby="ex1-label"
        role="listbox"
        id="ex1-listbox"
        className={classNames({
          "dcui-autocomplete__listbox": true,
          "dcui-autocomplete__listbox--show": options.length > 0,
        })}
      >
        {options.map((option, i) => {
          const resultId = `result-item-${i + 1}`;
          return (
            <li
              className="dcui-autocomplete__result"
              role="option"
              id={resultId}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default AutoComplete;
