export const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCallback(true);
    }
  };
  const exitFull = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      runCallback(false);
    }
  };
  return { element, triggerFull, exitFull };
};
