// Generated with util/create-component.js
export interface ProgressBarProps {
  minimumValue?: number;
  maximumValue?: number;
  currentValue: number;
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
