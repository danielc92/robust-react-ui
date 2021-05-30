// Generated with util/create-component.js
import React from "react";

import {
  FormCheckboxGroupProps,
  FormFieldSetProps,
  FormInputProps,
  FormLabelProps,
  FormLegendProps,
  FormProps,
  FormSelectProps,
  FormSubmitProps,
  FormTextAreaProps,
} from "./Form.types";

import "./Form.scss";
import classNames from "classnames";

const Form = ({ children, onSubmitFunction, ariaDescribedBy }: FormProps) => (
  <form
    aria-describedby={ariaDescribedBy || null}
    data-testid="Form"
    className="dcui-form"
    onSubmit={(event) => {
      event.preventDefault();
      onSubmitFunction();
    }}
  >
    {children}
  </form>
);

const Legend = ({ id, children }: FormLegendProps) => (
  <legend className="dcui-form__legend" id={id}>
    {children}
  </legend>
);

const FieldSet = ({ children }: FormFieldSetProps) => (
  <fieldset className="dcui-form__fieldset">{children}</fieldset>
);

const Label = ({ children, id, htmlFor }: FormLabelProps) => (
  <label className="dcui-form__label" htmlFor={htmlFor || null} id={id || null}>
    {children}
  </label>
);

const Input = ({
  value,
  id,
  placeholder,
  onChangeFunction,
  onBlurFunction,
  type,
  fullWidth,
  error,
  errorMessage,
  disabled,
}: FormInputProps) => (
  <div className="dcui-form__input-wrapper" data-testid="InputWrapper">
    <input
      data-testid="Input"
      disabled={disabled}
      className={classNames({
        "dcui-form__input": true,
        "dcui-form__input--full-width": fullWidth,
        "dcui-form__input--has-error": error,
        "dcui-form__input--disabled": disabled,
        "dcui-form__input--o": disabled,
      })}
      type={type || "text"}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChangeFunction}
      onBlur={onBlurFunction || (() => {})}
    />
    <p
      className={classNames({
        "dcui-form__input-error": true,
        "dcui-form__input-error--hidden": !error,
      })}
    >
      {errorMessage}
    </p>
  </div>
);

const CheckboxGroup = ({
  id,
  values,
  ariaLabelledBy,
  onSelectFunction,
}: FormCheckboxGroupProps) => {
  return (
    <div role="group" aria-labelledby={ariaLabelledBy}>
      <ul className="dcui-form__checkbox-group" data-testid="CheckboxGroup">
        {values.map((v, i) => (
          <li key={`checkbox-item-${i}`}>
            <div
              onKeyDown={(event) => {
                if (event.keyCode === 32) {
                  event.preventDefault();
                  event.stopPropagation();
                  onSelectFunction(v.keyValue, !v.checked);
                }
              }}
              onClick={() => onSelectFunction(v.keyValue, !v.checked)}
              className="dcui-form__checkbox"
              data-testid="Checkbox"
              role="checkbox"
              aria-checked={v.checked ? "true" : "false"}
              tabIndex={0}
            >
              {v.displayValue}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Select = ({
  id,
  onBlurFunction,
  onChangeFunction,
  selectedValue,
  values,
  multiple,
  disabled,
}: FormSelectProps) => (
  <select
    value={selectedValue}
    id={id}
    multiple={multiple || null}
    className={classNames({
      "dcui-form__select": true,
      "dcui-form__select--disabled": disabled,
      "dcui-form__select--o": disabled, // override class
    })}
    disabled={disabled}
    onChange={onChangeFunction}
    onBlur={onBlurFunction || (() => {})}
  >
    {values.map((v) => (
      <option key={v.keyValue} value={v.keyValue}>
        {v.displayValue}
      </option>
    ))}
  </select>
);

const TextArea = ({
  id,
  value,
  rows,
  placeholder,
  onChangeFunction,
  onBlurFunction,
  fullWidth,
  error,
  errorMessage,
  disabled,
}: FormTextAreaProps) => (
  <div className="dcui-form__textarea-wrapper" data-testid="TextAreaWrapper">
    <textarea
      data-testid="TextArea"
      disabled={disabled}
      className={classNames({
        "dcui-form__textarea": true,
        "dcui-form__textarea--full-width": fullWidth,
        "dcui-form__textarea--has-error": error,
        "dcui-form__textarea--disabled": disabled,
        "dcui-form__textarea--o": disabled, // override class
      })}
      rows={rows || 8}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={onChangeFunction}
      onBlur={onBlurFunction || (() => {})}
    />
    <p
      className={classNames({
        "dcui-form__textarea-error": true,
        "dcui-form__textarea-error--hidden": !error,
      })}
    >
      {errorMessage}
    </p>
  </div>
);

const Submit = ({ value, id, size, variant }: FormSubmitProps) => (
  <input
    type="submit"
    value={value}
    id={id || null}
    data-testid="Button"
    className={classNames({
      "dcui-form__submit": true,
      "dcui-form__submit--small": size === "small",
      "dcui-form__submit--medium": !size || size === "medium",
      "dcui-form__submit--large": size === "large",
      "dcui-form__submit--primary": variant === "primary" || !variant,
      "dcui-form__submit--danger": variant === "danger",
      "dcui-form__submit--success": variant === "success",
    })}
  />
);

Form.Submit = Submit;
Form.Legend = Legend;
Form.FieldSet = FieldSet;
Form.Label = Label;
Form.Input = Input;
Form.TextArea = TextArea;
Form.Select = Select;
Form.CheckboxGroup = CheckboxGroup;
export default Form;
