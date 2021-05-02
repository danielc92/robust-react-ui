// Generated with util/create-component.js
import React, { createRef, useEffect } from "react";

import { AlertDialogueProps } from "./AlertDialogue.types";

import "./AlertDialogue.scss";
import classNames from "classnames";
import Typography from "../Typography";
import Button from "../Button";

const AlertDialogue = ({
  open,
  titleText,
  bodyText,
  confirmButtonText,
  cancelButtonText,
  handleCloseAction,
  handleConfirmAction,
}: AlertDialogueProps) => {
  const ref = React.createRef<HTMLButtonElement>();

  const focusOnButton = () => ref.current?.focus();

  useEffect(() => {
    if (open) {
      focusOnButton();
    }
  }, [open]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
    }
  };

  return (
    <div
      data-testid="AlertDialogue"
      onKeyDown={handleKeyDown}
      className={classNames({
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
          <Button variant="danger" ref={ref} handleClick={handleCloseAction}>
            {cancelButtonText}
          </Button>
          <Button
            variant="success"
            handleClick={handleConfirmAction}
            // aria-controls="notes"
          >
            {confirmButtonText}
          </Button>
        </div>
      </div>
      <div tabIndex={0}></div>
    </div>
  );
};

export default AlertDialogue;
