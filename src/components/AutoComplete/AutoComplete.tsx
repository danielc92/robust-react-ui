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
      Choice 1 Fruit or Vegetable
    </label>
    <div>
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
        />
      </div>
      <ul
        aria-labelledby="ex1-label"
        role="listbox"
        id="ex1-listbox"
        className="dcui-autocomplete__listbox"
      >
        <li
          className="dcui-autocomplete__result"
          role="option"
          id="result-item-0"
        >
          Apple
        </li>
      </ul>
    </div>
  </div>
);

export default AutoComplete;
