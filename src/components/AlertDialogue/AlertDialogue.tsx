// Generated with util/create-component.js
import React, { useEffect } from 'react';
import getClassNames from 'utils/getClassNames';
import { AlertDialogueProps } from './AlertDialogue.types';
import './AlertDialogue.scss';
import Typography from '../Typography';
import Button from '../Button';

const AlertDialogue = ({
  open,
  titleText,
  bodyText,
  confirmButtonText = 'Confrim',
  cancelButtonText = 'Cancel',
  onCloseActionFunction,
  onConfirmActionFunction,
}: AlertDialogueProps) => {
  const ref = React.createRef<HTMLButtonElement>();
  const ref2 = React.createRef<HTMLButtonElement>();
  const focusOnButton = () => ref.current?.focus();

  useEffect(() => {
    if (open) {
      focusOnButton();
    }
  }, [open]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onCloseActionFunction();
    }
  };

  const handleCancelKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const { keyCode, shiftKey } = event;
    if (keyCode === 9) {
      event.preventDefault();
      if (shiftKey) {
        // handle back
        ref2.current?.focus();
      } else {
        // handle tab forward
        ref2.current?.focus();
      }
    }
    if (keyCode === 38 || keyCode === 40) {
      // stop vert scrolling
      event.preventDefault();
    }
  };

  const handleConfirmKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const { keyCode, shiftKey } = event;
    if (keyCode === 9) {
      event.preventDefault();
      if (shiftKey) {
        // handle back
        ref.current?.focus();
      } else {
        // handle tab forward
        ref.current?.focus();
      }
    }

    if (keyCode === 38 || keyCode === 40) {
      // stop vert scrolling
      event.preventDefault();
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onKeyDown={handleKeyDown}
      data-testid="AlertDialogue"
      className={getClassNames({
        'dcui-modal__overlay': true,
        'dcui-modal__overlay--active': open,
      })}
    >
      <div
        id="alert_dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="dialog_label"
        aria-describedby="dialog_desc"
        className="dcui-modal__content"
      >
        <Typography.Heading level={2} id="dialog_label">
          {titleText}
        </Typography.Heading>
        <div id="dialog_desc" className="dialog_desc">
          <Typography.Paragraph>{bodyText}</Typography.Paragraph>
        </div>
        <div className="dcui-modal__actions">
          <Button
            onKeyDownFunction={handleCancelKeyDown}
            variant="secondary"
            ref={ref}
            onClickFunction={onCloseActionFunction}
          >
            {cancelButtonText}
          </Button>
          <Button
            onKeyDownFunction={handleConfirmKeyDown}
            ref={ref2}
            onClickFunction={onConfirmActionFunction}
            // aria-controls="notes"
          >
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialogue;
