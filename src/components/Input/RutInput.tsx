import React from "react";
import { format } from "rut.js";
import InputDefault from "./default";

const InputRut = (props: { value: any; error: any; onChange: Function }) => {
  const name = "rut";
  const MAXIMUM_LENGTH_RUT = 12;
  const onChange = props.onChange({
    name,
    handler: format,
    maxLength: MAXIMUM_LENGTH_RUT
  });

  return (
    <InputDefault
      type="string"
      placeholder="12.345.678-9"
      label="RUT"
      name={name}
      onChange={onChange}
      value={props.value}
      error={props.error}
    />
  );
};

export default InputRut;
