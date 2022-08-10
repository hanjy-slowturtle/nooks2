export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    if (typeof validator === "function" ? validator(value) : true) {
      setValue(value);
    }
  };
  return { value, onChange };
};
