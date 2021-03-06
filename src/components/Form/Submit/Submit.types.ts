export interface IFormSubmitProps {
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Provides component with a colour theme.
   * @default primary
   */
  variant?: 'primary' | 'danger' | 'success';
  value: string;
  /**
   * Provides the component with an id attribute. May be used for accessibility purposes.
   */
  id?: string;
}
