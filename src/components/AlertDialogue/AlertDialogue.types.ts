// Generated with util/create-component.js
export interface AlertDialogueProps {
  open: boolean;
  titleText: string;
  bodyText: string;
  confirmButtonText: string;
  cancelButtonText: string;
  handleCloseAction: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleConfirmAction: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
