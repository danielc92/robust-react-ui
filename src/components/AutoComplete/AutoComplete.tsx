// Generated with util/create-component.js
import React, { createRef, useEffect, useRef, useState } from "react";

import { AutoCompleteProps } from "./AutoComplete.types";
import "./AutoComplete.scss";
import classNames from "classnames";

const AutoComplete = ({
  labelId,
  labelText,
  options,
  value,
  onChangeFunction,
  onSelectOptionFunction,
  onClearOptionsFunction,
}: AutoCompleteProps) => {
  const [moddedOptions, setModdedOptions] = useState<
    { option: string; i: number; selected: boolean; id: string }[]
  >([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const refList = options.map((option, i) => ({
      i,
      option,
      selected: false,
      id: "result_" + i,
    }));
    setModdedOptions(refList);
  }, [options]);

  const selectAndCloseMenu = () => {
    setOpen(false);
    const selected = moddedOptions.find((x) => x.selected);
    if (ref.current && selected) {
      onSelectOptionFunction(selected.option);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // down
    if (event.keyCode === 40) {
      switchFocus("DOWN");
    }
    // up
    if (event.keyCode === 38) {
      switchFocus("UP");
    }

    if (event.keyCode === 13) {
      selectAndCloseMenu();
    }

    // end
    if (event.keyCode === 35) {
      const length = moddedOptions.length;
      if (length) {
        changePseudoFocus(length - 1);
      }
    }

    // home
    if (event.keyCode === 36) {
      const length = moddedOptions.length;
      if (length) changePseudoFocus(0);
    }

    // escape
    if (event.keyCode === 27) {
      onClearOptionsFunction();
      setOpen(false);
    }
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setOpen(true);
    onChangeFunction(event.target.value);
  };

  const changePseudoFocus = (index: number) =>
    setModdedOptions(
      moddedOptions.map((x) => {
        if (x.i === index) {
          return { ...x, selected: true };
        }
        return { ...x, selected: false };
      })
    );

  const switchFocus = (dir: "UP" | "DOWN") => {
    const length = moddedOptions.length;
    const max = length - 1;
    const anySelected = moddedOptions.find((x) => x.selected);

    // If there are more than 0 items, navigate
    if (length > 0) {
      if (anySelected) {
        // get current index
        if (dir === "UP") {
          if (anySelected.i === 0) {
            changePseudoFocus(max);
          } else {
            changePseudoFocus(anySelected.i - 1);
          }
        }
        if (dir === "DOWN") {
          if (anySelected.i === max) {
            changePseudoFocus(0);
          } else {
            changePseudoFocus(anySelected.i + 1);
          }
        }
      } else {
        if (dir === "UP") {
          changePseudoFocus(max);
        }
        if (dir === "DOWN") {
          changePseudoFocus(0);
        }
      }
    }
  };

  const currentFocus = moddedOptions.find((x) => x.selected);
  return (
    <div
      data-testid="AutoComplete"
      className={classNames({
        "dcui-autocomplete": true,
      })}
      id="ex1"
    >
      <label
        data-testid="AutoCompleteLabel"
        htmlFor="ex1-input"
        id={labelId}
        className="dcui-autocomplete__label"
      >
        {labelText}
      </label>
      <div className="dcui-autocomplete__wrapper">
        <div
          role="combobox"
          aria-expanded={open ? "true" : "false"}
          aria-owns="ex1-listbox"
          aria-haspopup="listbox"
          id="ex1-combobox"
        >
          <input
            onBlur={onClearOptionsFunction}
            data-testid="AutoCompleteInput"
            ref={ref}
            value={value}
            type="text"
            aria-autocomplete="list"
            aria-controls="ex1-listbox"
            id="ex1-input"
            aria-activedescendant={currentFocus ? currentFocus.id : null}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <ul
          aria-labelledby={labelId}
          role="listbox"
          id="ex1-listbox"
          className={classNames({
            "dcui-autocomplete__listbox": true,
            "dcui-autocomplete__listbox--show": options.length > 0,
          })}
          data-testid="AutoCompleteListBox"
        >
          {open &&
            moddedOptions.map((item, i) => {
              return (
                <li
                  data-testid="AutoCompleteResult"
                  onMouseEnter={() => changePseudoFocus(i)}
                  onClick={() => selectAndCloseMenu()}
                  key={item.id}
                  className={classNames({
                    "dcui-autocomplete__result": true,
                    "dcui-autocomplete__result--selected":
                      item.id === currentFocus?.id,
                  })}
                  role="option"
                  id={item.id}
                  aria-selected={item.id === currentFocus?.id}
                >
                  {item.option}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
