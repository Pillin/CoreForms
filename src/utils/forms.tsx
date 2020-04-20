import { limitLength } from "./operations";

export const onInputChange = (form: any) => (inputProps: {
  name: string;
  maxLength: number;
  handler: Function;
}) => (props: any) => {
  const { name, maxLength, handler } = inputProps;
  let {
    target: { value }
  } = props;

  if (maxLength) {
    value = limitLength(maxLength)(value);
  }
  if (handler) {
    value = handler(value);
  }
  form.setFieldTouched(name, true);
  form.setFieldValue(name, value);
};

export const isDisabledSubmitButton = (formik: any) => {
  if (!formik.isSubmitting) {
    return (
      (formik.touched && !Object.values(formik.touched).length) ||
      (formik.errors && Object.values(formik.errors).length > 0)
    );
  }
  return formik.isSubmitting;
};
