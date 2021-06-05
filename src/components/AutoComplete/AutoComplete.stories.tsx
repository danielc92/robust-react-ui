// // Generated with util/create-component.js

import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import AutoComplete from "./AutoComplete";
import { AutoCompleteProps } from "./AutoComplete.types";

export default {
  title: "Components/AutoComplete",
  component: AutoComplete,
  args: {
    labelId: "colour-autocomplete",
    labelText: "Search for a colour.",
  },
} as Meta<AutoCompleteProps>;

const Template: Story<AutoCompleteProps> = (args) => {
  const mockData = [
    "blue",
    "light blue",
    "dark blue",
    "green",
    "yellow",
    "red",
    "gold",
  ];
  const [options, setOptions] = useState<Array<string>>([]);
  const [value, setValue] = useState<string>("");
  const onClearOptionsFunction = () => setOptions([]);
  const onChangeFunction = (newValue: string) => {
    setValue(newValue);
    setOptions(
      mockData.filter(
        (o) => o.toLowerCase().indexOf(newValue.toLowerCase()) > -1
      )
    );
  };
  const onSelectOptionFunction = (newValue: string) => setValue(newValue);
  return (
    <AutoComplete
      {...args}
      options={options}
      onClearOptionsFunction={onClearOptionsFunction}
      onSelectOptionFunction={onSelectOptionFunction}
      onChangeFunction={onChangeFunction}
      value={value}
    />
  );
};

export const Basic: Story<AutoCompleteProps> = Template.bind({});
