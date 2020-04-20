import React from "react";
import styled from "@emotion/styled";

const InputContainer = styled.section`
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  justify-content: flex-start;
  font-family: Montserrat;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  width: 320px;
`;

const Label = styled.label<{ error: boolean }>`
  font-size: 10px;
  height: 13px;
  color: ${props => (props.error ? "#4a4a4a" : "#4a4a4a")};
  display: flex;
  flex-direction: row;
`;

const BoxLine = styled.div<{ error: boolean }>`
  position: absolute;
  width: 100%;
  height: 0px;
  bottom: 0px;
  border: solid 1px ${props => (props.error ? "red" : "#979797")};
`;

const Input = styled.input<{ error: boolean }>`
  outline: none;
  width: 100%;
  height: 22px;
  border: 0px;
  padding-left: 0px;
  border-bottom: ${({ error }) =>
    error ? "2px solid red" : "2px solid transparent"};
  :focus {
    outline: none;
    & + div {
      border-bottom-style: groove;
      border-color: #523178;
    }
  }
`;

const ImgContainer = styled.section`
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  right: 0px;
  bottom: 14px;
  border: 1px solid red;
`;

const InputMessage = styled.section<{ color: string }>`
  height: 20px;
  text-align: left;
  color: ${({ color }) => (color === "danger" ? "red" : "")};
`;

const DefaultInput = (props: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  isRequired?: boolean;
  onChange: Function;
  onFocus?: Function;
  error: string;
  disabled?: boolean;
  value: any;
}) => {
  const { isRequired = false, disabled = false, error = "" } = props;
  return (
    <InputContainer>
      <Label error={Boolean(props.error)}>
        {props.label}
        {isRequired ? "*" : ""}
      </Label>
      <ImgContainer>
        <Input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={e => props.onChange(e)}
          onFocus={e => props.onFocus && props.onFocus(e)}
          placeholder={props.placeholder}
          error={Boolean(props.error)}
          disabled={disabled}
        />
        <BoxLine error={Boolean(props.error)} />
        <Img src="/static/imgs/ic-edit.svg" alt="" />
      </ImgContainer>
      <InputMessage color={error ? "danger" : "info"}>
        {props.error}
      </InputMessage>
    </InputContainer>
  );
};

export default DefaultInput;
