// Generated with util/create-component.js
export interface IAutoCompleteProps {
  /**
   * Controlled state for a list of options.
   */
  options: string[];
  /**
   * An accessible label.
   */
  labelText: string;
  /**
   * Controlled state for the current selected option.
   */
  value: string;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  labelId: string;
  /**
   * Function triggered interally, used when onChange event is activated.
   */
  onChangeFunction: (value: string) => void;
  /**
   * Function triggered internally, when an option is selected. Used to change the value prop
   */
  onSelectOptionFunction: (value: string) => void;
  /**
   * Function triggered internally, used to clear the state of options prop
   */
  onClearOptionsFunction: () => void;
}
