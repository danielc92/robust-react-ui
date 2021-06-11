// Generated with util/create-component.js
export interface AutoCompleteProps {
  options: string[];
  labelText: string;
  value: string;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  labelId: string;
  onChangeFunction: (value: string) => void;
  onSelectOptionFunction: (value: string) => void;
  onClearOptionsFunction: () => void;
}
