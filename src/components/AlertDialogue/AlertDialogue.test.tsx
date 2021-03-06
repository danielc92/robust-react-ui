// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import AlertDialogue from './AlertDialogue';
import { IAlertDialogueProps } from './AlertDialogue.types';

describe('AlertDialogue Suite', () => {
  let props: IAlertDialogueProps;

  beforeEach(() => {
    props = {
      bodyText: 'modal body text content',
      titleText: 'modal title',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Confirm',
      open: true,
      onCloseActionFunction: () => {},
      onConfirmActionFunction: () => {},
    };
  });

  const renderComponent = () => render(<AlertDialogue {...props} />);

  it('should render the correct base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('AlertDialogue');

    expect(component).toHaveClass('rrui-modal__overlay');
  });
});
