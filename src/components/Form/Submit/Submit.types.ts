export interface FormSubmitProps {
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'danger' | 'success';
  value: string;
  id?: string;
}
