export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (
    (onConfirm && typeof onConfirm !== "function") ||
    (onCancel && typeof onCancel !== "function")
  ) {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm && onConfirm();
    } else {
      onCancel && onCancel();
    }
  };
  return confirmAction;
};
