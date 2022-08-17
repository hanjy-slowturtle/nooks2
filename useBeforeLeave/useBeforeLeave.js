export const useBeforeLeave = (onBefore) => {
  if (onBefore && typeof onBefore !== "function") {
    return;
  }
  useEffect(() => {
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        console.log("leaving");
        onBefore && onBefore();
      }
    };
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};
