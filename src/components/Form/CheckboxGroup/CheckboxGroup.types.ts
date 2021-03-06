export interface IFormCheckboxOptionProps {
  displayValue: string;
  keyValue: string;
  checked: boolean;
}
export interface IFormCheckboxGroupProps {
  /**
   * Provides the component with an id attribute. May be used for accessibility purposes.
   */
  id: string;
  values: IFormCheckboxOptionProps[];
  /**
   * An accessible label via id of another element.
   */
  ariaLabelledBy: string;
  onSelectFunction: (keyValue: string, checkedValue: boolean) => void;
}
