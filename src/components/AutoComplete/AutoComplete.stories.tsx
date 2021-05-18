// Generated with util/create-component.js
import React from "react";
import AutoComplete from "./AutoComplete";

export default {
  title: "AutoComplete",
};

const handleSearch = (s: string) => console.log(s);
const options = ["Apple", "Banana", "Carrot", "Watermelon", "Pineapple"];
export const Basic = () => (
  <AutoComplete
    options={options}
    labelId="autocomplete"
    labelText="Choose a fruit or vegetable"
    onSearchFunction={handleSearch}
  />
);
