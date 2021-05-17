// Generated with util/create-component.js
import React, { createRef, useEffect, useRef, useState } from "react";

import { AutoCompleteProps } from "./AutoComplete.types";
import "./AutoComplete.scss";
import classNames from "classnames";

const AutoComplete = ({
  labelId,
  labelText,
  options,
  onSearchFunction,
}: AutoCompleteProps) => {
  const [refs, setRefs] = useState<
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
    setRefs(refList);
  }, [options]);

  const selectAndCloseMenu = () => {
    setOpen(false);
    const selected = refs.find((x) => x.selected);
    if (ref.current && selected) {
      ref.current.value = selected.option;
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
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setOpen(true);
    onSearchFunction(event.target.value);
  };

  const changePseudoFocus = (index: number) =>
    setRefs(
      refs.map((x) => {
        if (x.i === index) {
          return { ...x, selected: true };
        }
        return { ...x, selected: false };
      })
    );

  const switchFocus = (dir: "UP" | "DOWN") => {
    const length = refs.length;
    const max = length - 1;
    const anySelected = refs.find((x) => x.selected);

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

  const currentFocus = refs.find((x) => x.selected);
  return (
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
          aria-expanded={open ? "true" : "false"}
          aria-owns="ex1-listbox"
          aria-haspopup="listbox"
          id="ex1-combobox"
        >
          <input
            ref={ref}
            value={ref?.current?.value}
            type="text"
            aria-autocomplete="list"
            aria-controls="ex1-listbox"
            id="ex1-input"
            aria-activedescendant=""
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <ul
          aria-labelledby="ex1-label"
          aria-activedescendant={currentFocus ? currentFocus.id : null}
          role="listbox"
          id="ex1-listbox"
          className={classNames({
            "dcui-autocomplete__listbox": true,
            "dcui-autocomplete__listbox--show": options.length > 0,
          })}
        >
          {open &&
            refs.map((item, i) => {
              const resultId = `result-item-${i + 1}`;
              return (
                <li
                  onMouseEnter={() => changePseudoFocus(i)}
                  onClick={() => selectAndCloseMenu()}
                  key={resultId}
                  className={classNames({
                    "dcui-autocomplete__result": true,
                    "dcui-autocomplete__result--selected":
                      item.id === currentFocus?.id,
                  })}
                  role="option"
                  id={resultId}
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
