export interface CheckboxOptionProps {
  displayValue: string;
  keyValue: string;
  checked: boolean;
}
export interface FormCheckboxGroupProps {
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id: string;
  values: CheckboxOptionProps[];
  /**
   * An accessible label via id of another element.
   */
  ariaLabelledBy: string;
  onSelectFunction: (keyValue: string, checkedValue: boolean) => void;
}
