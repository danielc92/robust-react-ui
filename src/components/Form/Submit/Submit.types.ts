export interface FormSubmitProps {
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
  id?: string;
}
