import React from "react";
import InputDefault from "./default";

const InputRut = (props: { value: any; error: any; onChange: Function }) => {
  const name = "password";

  const onChange = props.onChange({
    name
  });

  return (
    <InputDefault
      type="password"
      placeholder="******"
      label="Password"
      name={name}
      onChange={onChange}
      value={props.value}
      error={props.error}
    />
  );
};

export default InputRut;
