import { ReactNode } from 'react';

export interface HeadingProps {
  children: ReactNode;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id?: string;
  /**
   * Maps to tag size
   * @default 1
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Increases the size by a multiplier factor. Can be applied to any level.
   */
  jumbo?: boolean;
}
