// Generated with util/create-component.js
import React from "react";
import Form from "./Form";

export default {
  title: "Form",
};

export const FormLayout = () => (
  <Form handleOnSubmit={() => {}}>
    <Form.FieldSet>
      <Form.Legend id="contact-info" title="Contact Info"></Form.Legend>
      <Form.Label htmlFor="input" title="Example"></Form.Label>
      <Form.Input
        id="input"
        value="jimmy123"
        handleOnChange={() => {}}
        placeholder="Password"
        type="password"
      />
      <Form.Label htmlFor="input" title="Example"></Form.Label>
      <Form.Input
        id="input"
        value="John Smith"
        handleOnChange={() => {}}
        placeholder="First Name"
      />
      <Form.Label htmlFor="input" title="Example"></Form.Label>
      <Form.Input
        id="input"
        value=""
        handleOnChange={() => {}}
        placeholder="Last Name"
      />
    </Form.FieldSet>
    <Form.Submit value="Confirm" />
  </Form>
);

export const TextareaWithLabel = () => (
  <Form.FieldSet>
    <Form.Label htmlFor="input" title="Example"></Form.Label>
    <Form.TextArea
      id="input"
      value=""
      handleOnChange={() => {}}
      placeholder="Hello world"
    />
  </Form.FieldSet>
);

export const TextareaWithLabelAndError = () => (
  <Form.FieldSet>
    <Form.Label htmlFor="input" title="Example"></Form.Label>
    <Form.TextArea
      id="input"
      error
      errorMessage="Something went wrong."
      value=""
      handleOnChange={() => {}}
      placeholder="Hello world"
    />
  </Form.FieldSet>
);

export const TextareaWithLabelDisabled = () => (
  <Form.FieldSet>
    <Form.Label htmlFor="input" title="Example"></Form.Label>
    <Form.TextArea
      id="input"
      disabled
      value=""
      handleOnChange={() => {}}
      placeholder="Hello world"
    />
  </Form.FieldSet>
);

export const InputWithLabel = () => (
  <Form.FieldSet>
    <Form.Label htmlFor="input" title="Example"></Form.Label>
    <Form.Input
      id="input"
      value=""
      handleOnChange={() => {}}
      placeholder="Hello world"
    />
  </Form.FieldSet>
);

export const InputWithLabelAndError = () => (
  <Form.FieldSet>
    <Form.Label htmlFor="input" title="Example"></Form.Label>
    <Form.Input
      id="input"
      error
      errorMessage="Something went wrong."
      value=""
      handleOnChange={() => {}}
      placeholder="Hello world"
    />
  </Form.FieldSet>
);

export const InputWithLabelDisabled = () => (
  <Form.FieldSet>
    <Form.Label htmlFor="input" title="Example"></Form.Label>
    <Form.Input
      id="input"
      disabled
      value=""
      handleOnChange={() => {}}
      placeholder="Hello world"
    />
  </Form.FieldSet>
);

export const SelectWithLabel = () => (
  <Form.FieldSet>
    <Form.Label htmlFor="input" title="Example"></Form.Label>
    <Form.Select
      id="input"
      selectedValue="apple"
      handleOnChange={() => {}}
      values={[
        {
          displayValue: "Apple pie",
          keyValue: "apple",
        },
        {
          displayValue: "Custard pie",
          keyValue: "cust",
        },
        {
          displayValue: "Shepherd's pie",
          keyValue: "shep",
        },
        {
          displayValue: "Meat pie",
          keyValue: "meat",
        },
      ]}
    />
  </Form.FieldSet>
);
