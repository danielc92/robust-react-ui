import React from 'react';

export interface IconProps {
  children: React.ReactNode;
  /**
   * Changes the viewBox attribute of the icon wrapper.
   * @default 0 0 24 24
   */
  viewBox?: string;
  /**
   * Changes the width attribute of the icon wrapper.
   * @default 24
   */
  width?: number;
  /**
   * Changes the height attribute of the icon wrapper.
   * @default 24
   */
  height?: number;
  /**
   * Changes the colour theme of the icon.
   */
  variant?: 'primary' | 'danger' | 'light' | 'dark' | 'success';
}
