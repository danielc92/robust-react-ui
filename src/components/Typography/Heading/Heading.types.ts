import { ReactNode } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface HeadingProps {
  children: ReactNode;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id?: string;
  level?: HeadingLevel;
  jumbo?: boolean;
}
