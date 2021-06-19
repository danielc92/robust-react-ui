// Generated with util/create-component.js
import React from 'react';
import './Form.scss';
import Submit from 'robust-react-ui/components/Form/Submit';
import Legend from 'robust-react-ui/components/Form/Legend';
import FieldSet from 'robust-react-ui/components/Form/FieldSet';
import Label from 'robust-react-ui/components/Form/Label';
import Input from 'robust-react-ui/components/Form/Input';
import Select from 'robust-react-ui/components/Form/Select';
import CheckboxGroup from 'robust-react-ui/components/Form/CheckboxGroup';
import TextArea from 'robust-react-ui/components/Form/TextArea';
import { IFormProps } from './Form.types';

const Form = ({ children, onSubmitFunction, ariaDescribedBy }: IFormProps) => (
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
