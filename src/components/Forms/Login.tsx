import React from "react";
import styled from "@emotion/styled";
import { PurpleButton } from "../Buttons";
import { RutInput, PasswordInput } from "../Input";
import { onInputChange } from "../../utils/forms";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

const LoginForm = (props: { formik: any; disabled: boolean }) => {
  const { formik, disabled } = props;
  const { values, errors } = formik;

  const onChange = onInputChange(formik);

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <RutInput onChange={onChange} value={values.rut} error={errors.rut} />
      <PasswordInput
        onChange={onChange}
        value={values.password}
        error={errors.password}
      />
      <PurpleButton label="Ingresar" disabled={disabled} />
    </FormContainer>
  );
};

export default LoginForm;
