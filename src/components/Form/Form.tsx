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
  <legend id={id}>{title}</legend>
);

interface FormFieldSetProps {
  children: ReactNode;
}
const FieldSet = ({ children }: FormFieldSetProps) => (
  <fieldset className="dcui-form__fieldset">{children}</fieldset>
);

interface FormLabelProps {
  title: string;
  htmlFor: string;
}
const Label = ({ title, htmlFor }: FormLabelProps) => (
  <label className="dcui-form__label" htmlFor={htmlFor}>
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
}

const Input = ({
  value,
  id,
  placeholder,
  handleOnChange,
  handleOnBlur,
  type,
  fullWidth,
}: FormInputProps) => (
  <input
    className={classNames({
      "dcui-form__input": true,
      "dcui-form__input--full-width": fullWidth,
    })}
    type={type ? type : "text"}
    placeholder={placeholder}
    id={id}
    value={value}
    onChange={handleOnChange}
    onBlur={handleOnBlur ? handleOnBlur : () => {}}
  />
);

interface FormSelectOptionProps {
  displayValue: string;
  keyValue: string;
}
interface FormSelectProps {
  id: string;
  multiple?: boolean;
  selectedValue: string | string[];
  values: Array<FormSelectOptionProps>;
  handleOnChange: (event: React.FocusEvent<HTMLSelectElement>) => void;
  handleOnBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

const Select = ({
  id,
  handleOnBlur,
  handleOnChange,
  selectedValue,
  values,
  multiple,
}: FormSelectProps) => (
  <select
    value={selectedValue}
    id={id}
    multiple={multiple ? multiple : null}
    className={classNames({
      "dcui-form__select": true,
    })}
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
}

const TextArea = ({
  id,
  value,
  rows,
  placeholder,
  handleOnChange,
  handleOnBlur,
  fullWidth,
}: FormTextAreaProps) => (
  <textarea
    className={classNames({
      "dcui-form__textarea": true,
      "dcui-form__textarea--full-width": fullWidth,
    })}
    rows={rows ? rows : 8}
    value={value}
    id={id}
    placeholder={placeholder}
    onChange={handleOnChange}
    onBlur={handleOnBlur ? handleOnBlur : () => {}}
  />
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
export default Form;
