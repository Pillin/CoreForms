import React from "react";
import { LoginForm } from "../Forms";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas";

const Login = () => {
  const initialValues = {
    rut: "",
    password: ""
  };

  const onSubmit = () => {
    alert("enviado");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit
  });

  return <LoginForm formik={formik} />;
};

export default Login;
