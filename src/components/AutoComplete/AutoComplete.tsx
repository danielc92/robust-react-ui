// Generated with util/create-component.js
import React, { useEffect, useRef, useState } from 'react';

import getClassNames from 'utils/getClassNames';
import { AutoCompleteProps } from './AutoComplete.types';
import './AutoComplete.scss';

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
  const [mouseIn, setMouseIn] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const refList = options.map((option, i) => ({
      i,
      option,
      selected: false,
      id: `result_${i}`,
    }));
    setModdedOptions(refList);
  }, [options]);

  const changePseudoFocus = (index: number) =>
    setModdedOptions(
      moddedOptions.map((x) => {
        if (x.i === index) {
          return { ...x, selected: true };
        }
        return { ...x, selected: false };
      })
    );

  const selectAndCloseMenu = () => {
    const selected = moddedOptions.find((x) => x.selected);
    if (ref.current && selected) {
      onSelectOptionFunction(selected.option);
    }

    onClearOptionsFunction();
  };

  const switchFocus = (dir: 'UP' | 'DOWN') => {
    const { length } = moddedOptions;
    const max = length - 1;
    const anySelected = moddedOptions.find((x) => x.selected);

    // If there are more than 0 items, navigate
    if (length > 0) {
      if (anySelected) {
        // get current index
        if (dir === 'UP') {
          if (anySelected.i === 0) {
            changePseudoFocus(max);
          } else {
            changePseudoFocus(anySelected.i - 1);
          }
        }
        if (dir === 'DOWN') {
          if (anySelected.i === max) {
            changePseudoFocus(0);
          } else {
            changePseudoFocus(anySelected.i + 1);
          }
        }
      } else {
        if (dir === 'UP') {
          changePseudoFocus(max);
        }
        if (dir === 'DOWN') {
          changePseudoFocus(0);
        }
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // down
    if (event.keyCode === 40) {
      switchFocus('DOWN');
    }
    // up
    if (event.keyCode === 38) {
      switchFocus('UP');
    }

    if (event.keyCode === 13) {
      selectAndCloseMenu();
    }

    // end
    if (event.keyCode === 35) {
      const { length } = moddedOptions;
      if (length) {
        changePseudoFocus(length - 1);
      }
    }

    // home
    if (event.keyCode === 36) {
      const { length } = moddedOptions;
      if (length) changePseudoFocus(0);
    }

    // escape
    if (event.keyCode === 27) {
      onClearOptionsFunction();
    }
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    onChangeFunction(event.target.value);
  };

  const currentFocus = moddedOptions.find((x) => x.selected);
  const open = moddedOptions.length > 0;
  return (
    <div
      data-testid="AutoComplete"
      className={getClassNames({
        'dcui-autocomplete': true,
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
          // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
          role="combobox"
          aria-expanded={open ? 'true' : 'false'}
          aria-owns="ex1-listbox"
          aria-haspopup="listbox"
          id="ex1-combobox"
        >
          <input
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              event.preventDefault();
              if (!mouseIn) onClearOptionsFunction();
            }}
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
          className={getClassNames({
            'dcui-autocomplete__listbox': true,
            'dcui-autocomplete__listbox--show': open,
          })}
          data-testid="AutoCompleteListBox"
        >
          {moddedOptions.map((item, i) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              data-testid="AutoCompleteResult"
              onMouseEnter={(
                event: React.MouseEvent<HTMLLIElement, MouseEvent>
              ) => {
                event.preventDefault();
                setMouseIn(true);
                changePseudoFocus(i);
              }}
              onMouseLeave={(
                event: React.MouseEvent<HTMLLIElement, MouseEvent>
              ) => {
                event.preventDefault();
                setMouseIn(false);
              }}
              onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                event.preventDefault();
                selectAndCloseMenu();
              }}
              key={item.id}
              className={getClassNames({
                'dcui-autocomplete__result': true,
                'dcui-autocomplete__result--selected':
                  item.id === currentFocus?.id,
              })}
              role="option"
              id={item.id}
              aria-selected={item.id === currentFocus?.id}
            >
              {item.option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
