// Generated with util/create-component.js
import React, { ReactNode } from "react";

import { FormProps } from "./Form.types";

import "./Form.scss";
import classNames from "classnames";

const Form = ({ children, handleOnSubmit }: FormProps) => (
  <form
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
}

const Input = ({
  value,
  id,
  placeholder,
  handleOnChange,
  type,
}: FormInputProps) => (
  <input
    minLength={4}
    maxLength={10}
    className="dcui-form__input"
    type={type ? type : "text"}
    placeholder={placeholder}
    id={id}
    value={value}
    onChange={handleOnChange}
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
// Form.TextArea = TextArea;
export default Form;
