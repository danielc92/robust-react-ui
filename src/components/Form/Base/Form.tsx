// Generated with util/create-component.js
import React from "react";

import { FormProps } from "./Form.types";

import "./Form.scss";
import Submit from "../Submit";
import Legend from "../Legend";
import FieldSet from "../FieldSet";
import Label from "../Label";
import Input from "../Input";
import Select from "../Select";
import CheckboxGroup from "../CheckboxGroup";
import TextArea from "../TextArea";

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

Form.Submit = Submit;
Form.Legend = Legend;
Form.FieldSet = FieldSet;
Form.Label = Label;
Form.Input = Input;
Form.TextArea = TextArea;
Form.Select = Select;
Form.CheckboxGroup = CheckboxGroup;
export default Form;
