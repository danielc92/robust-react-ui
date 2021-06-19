import { ReactNode } from 'react';

export interface IParagraphProps {
  children: ReactNode;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id?: string;
  bolded?: boolean;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
}
