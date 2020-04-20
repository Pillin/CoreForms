export const limitLength = (maximumLength: number) => (value: string) => {
  if (value.toString().length < maximumLength) return value;
  return value.substring(0, maximumLength);
};
