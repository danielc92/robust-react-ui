// Generated with util/create-component.js
export interface AlertDialogueProps {
  /**
   * Used to control the visibility of the modal.
   */
  open: boolean;
  /**
   * The title of the modal.
   */
  titleText: string;
  /**
   * The body text of the modal.
   */
  bodyText: string;
  /**
   * Text to be shown in the confirm action button.
   * @default Confirm
   */
  confirmButtonText?: string;
  /**
   * Text to be shown in the cancel action button.
   * @default Cancel
   */
  cancelButtonText?: string;
  /**
   * Function triggered when close button is activated.
   */
  onCloseActionFunction: () => void;
  /**
   * Function triggered when confirm button is activated.
   */
  onConfirmActionFunction: () => void;
}
