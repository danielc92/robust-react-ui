export interface CheckboxOptionProps {
  displayValue: string;
  keyValue: string;
  checked: boolean;
}
export interface FormCheckboxGroupProps {
  id: string;
  values: CheckboxOptionProps[];
  ariaLabelledBy: string;
  onSelectFunction: (keyValue: string, checkedValue: boolean) => void;
}
