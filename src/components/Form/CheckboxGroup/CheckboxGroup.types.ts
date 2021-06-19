export interface ICheckboxOptionProps {
  displayValue: string;
  keyValue: string;
  checked: boolean;
}
export interface IFormCheckboxGroupProps {
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id: string;
  values: ICheckboxOptionProps[];
  /**
   * An accessible label via id of another element.
   */
  ariaLabelledBy: string;
  onSelectFunction: (keyValue: string, checkedValue: boolean) => void;
}
