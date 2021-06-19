import React from 'react';

// Generated with util/create-component.js
export interface GridProps {
  children: React.ReactNode;
  /**
   * Vertical horizontal spacing between grid items
   * @default s
   */
  gap?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  type?: 'fixed' | 'fluid';
}
