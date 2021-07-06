import { ReactNode } from 'react';

// Generated with util/create-component.js
export interface IFormProps {
  children: ReactNode;
  /**
   * Function triggered interally, when form is submitted.
   */
  onSubmitFunction: () => void;
  /**
   * Indicate id of component used to describe this component.
   */
  ariaDescribedBy?: string;
}
