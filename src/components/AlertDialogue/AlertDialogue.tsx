// Generated with util/create-component.js
import React, { useEffect } from "react";

import { AlertDialogueProps } from "./AlertDialogue.types";

import "./AlertDialogue.scss";
import getClassNames from "utils/getClassNames";
import Typography from "../Typography";
import Button from "../Button";

const AlertDialogue = ({
  open,
  titleText,
  bodyText,
  confirmButtonText,
  cancelButtonText,
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
    if (event.key === "Escape") {
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
    <div
      data-testid="AlertDialogue"
      onKeyDown={handleKeyDown}
      className={getClassNames({
        "dcui-modal__overlay": true,
        "dcui-modal__overlay--active": open,
      })}
    >
      <div tabIndex={0}></div>
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
            {cancelButtonText || "Cancel"}
          </Button>
          <Button
            onKeyDownFunction={handleConfirmKeyDown}
            ref={ref2}
            onClickFunction={onConfirmActionFunction}
            // aria-controls="notes"
          >
            {confirmButtonText || "Confirm"}
          </Button>
        </div>
      </div>
      <div tabIndex={0}></div>
    </div>
  );
};

export default AlertDialogue;
