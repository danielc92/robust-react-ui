// Generated with util/create-component.js
export interface IProgressBarProps {
  /**
   * Minimum value for the progress bar
   * @default 0
   */
  minimumValue?: number;
  /**
   * Maximum value for the progress bar
   * @default 100
   */
  maximumValue?: number;

  /**
   * Controlled value for progress bar
   */
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
  /**
   * An accessible label
   * @default Progress bar
   */
  ariaLabel?: string;
}
