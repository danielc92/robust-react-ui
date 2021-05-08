// Generated with util/create-component.js
import React, { ReactNode } from "react";

import { FormProps } from "./Form.types";

import "./Form.scss";
import classNames from "classnames";

const Form = ({ children, handleOnSubmit, ariaDescribedBy }: FormProps) => (
  <form
    aria-describedby={ariaDescribedBy ? ariaDescribedBy : null}
    data-testid="Form"
    className="dcui-form"
    onSubmit={(event) => {
      event.preventDefault();
      handleOnSubmit();
    }}
  >
    {children}
  </form>
);

interface FormLegendProps {
  id: string;
  title: string;
}
const Legend = ({ id, title }: FormLegendProps) => (
  <legend className="dcui-form__legend" id={id}>
    {title}
  </legend>
);

interface FormFieldSetProps {
  children: ReactNode;
}
const FieldSet = ({ children }: FormFieldSetProps) => (
  <fieldset className="dcui-form__fieldset">{children}</fieldset>
);

interface FormLabelProps {
  title: string;
  htmlFor?: string;
  id?: string;
}
const Label = ({ title, id, htmlFor }: FormLabelProps) => (
  <label
    className="dcui-form__label"
    htmlFor={htmlFor ? htmlFor : null}
    id={id ? id : null}
  >
    {title}
  </label>
);

interface FormInputProps {
  id: string;
  value: string;
  placeholder: string;
  type?: "text" | "password";
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

const Input = ({
  value,
  id,
  placeholder,
  handleOnChange,
  handleOnBlur,
  type,
  fullWidth,
  error,
  errorMessage,
  disabled,
}: FormInputProps) => (
  <div className="dcui-form__input-wrapper">
    <input
      disabled={disabled}
      className={classNames({
        "dcui-form__input": true,
        "dcui-form__input--full-width": fullWidth,
        "dcui-form__input--has-error": error,
      })}
      type={type ? type : "text"}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur ? handleOnBlur : () => {}}
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

export interface FormCheckboxGroupProps {
  id: string;
  values: CheckboxOptionProps[];
  ariaLabelledBy: string;
  handleCheckboxClick: (keyValue: string, checkedValue: boolean) => void;
}

const CheckboxGroup = ({
  id,

  values,
  ariaLabelledBy,
  handleCheckboxClick,
}: FormCheckboxGroupProps) => {
  // const handleKeyDown = (
  //   event: React.KeyboardEvent<HTMLDivElement>,
  //   key: string,
  //   checked: boolean
  // ) => {
  //   console.log(event, key, checked);
  //   if (event.keyCode === 32) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     handleCheckboxClick(key, checked);
  //   }
  // };
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
                  handleCheckboxClick(v.keyValue, !v.checked);
                }
              }}
              onClick={() => handleCheckboxClick(v.keyValue, !v.checked)}
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

interface FormSelectOptionProps {
  displayValue: string;
  keyValue: string;
}

export interface CheckboxOptionProps {
  displayValue: string;
  keyValue: string;
  checked: boolean;
}

interface FormSelectProps {
  id: string;
  multiple?: boolean;
  selectedValue: string | string[];
  values: Array<FormSelectOptionProps>;
  handleOnChange: (event: React.FocusEvent<HTMLSelectElement>) => void;
  handleOnBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

const Select = ({
  id,
  handleOnBlur,
  handleOnChange,
  selectedValue,
  values,
  multiple,
  disabled,
}: FormSelectProps) => (
  <select
    value={selectedValue}
    id={id}
    multiple={multiple ? multiple : null}
    className={classNames({
      "dcui-form__select": true,
    })}
    disabled={disabled}
    onChange={handleOnChange}
    onBlur={handleOnBlur ? handleOnBlur : () => {}}
  >
    {values.map((v) => (
      <option key={v.keyValue} value={v.keyValue}>
        {v.displayValue}
      </option>
    ))}
  </select>
);

interface FormTextAreaProps {
  id: string;
  value: string;
  placeholder: string;
  handleOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

const TextArea = ({
  id,
  value,
  rows,
  placeholder,
  handleOnChange,
  handleOnBlur,
  fullWidth,
  error,
  errorMessage,
  disabled,
}: FormTextAreaProps) => (
  <div className="dcui-form__textarea-wrapper">
    <textarea
      disabled={disabled}
      className={classNames({
        "dcui-form__textarea": true,
        "dcui-form__textarea--full-width": fullWidth,
        "dcui-form__textarea--has-error": error,
      })}
      rows={rows ? rows : 8}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={handleOnChange}
      onBlur={handleOnBlur ? handleOnBlur : () => {}}
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
interface FormSubmitProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "danger" | "success";
  value: string;
  id?: string;
}
const Submit = ({ value, id, size, variant }: FormSubmitProps) => (
  <input
    type="submit"
    value={value}
    id={id ? id : null}
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
