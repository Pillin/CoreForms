import React, { useState, useEffect } from "react";
import { LoginForm } from "../Forms";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas";
import { useCaptcha } from "../../utils/ReCaptcha/hooks";
import { isDisabledSubmitButton } from "../../utils/forms";

const Login = () => {
  const [tokenNumber, setTokenNumber] = useState(-1);
  const initialValues = {
    rut: "",
    password: "",
  };

  const token = useCaptcha({
    tokenNumber,
    action: "login",
  });

  const onSubmit = () => {
    alert(`enviado  ${token}`);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });
  const disabled = isDisabledSubmitButton(formik);

  useEffect(() => {
    setTokenNumber(tokenNumber + 1);
  }, [disabled]);

  return (
    <>
      <LoginForm formik={formik} disabled={disabled} />
    </>
  );
};

export default Login;
