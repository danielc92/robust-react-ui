// Generated with util/create-component.js
export interface IProgressBarProps {
  minimumValue?: number;
  maximumValue?: number;
  currentValue: number;
  /**
   * Component will take up the full width available.
   */
  fullWidth?: boolean;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Provides component with a colour theme.
   * @default primary
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
}
