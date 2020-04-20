import React from "react";
import styled from "@emotion/styled";

const getBackground = (isDisabled: boolean, background: string | undefined) =>
  isDisabled ? "#757575" : background ? background : "#523178";

const Button = styled.button<{
  disabled: boolean;
  color?: string;
  background?: string;
}>`
  min-width: 130px;
  height: 50px;
  font-family: Montserrat;
  font-size: 13.5px;
  font-weight: 600;
  padding: 15px 0px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${props => (props.color ? props.color : "#ffffff;")};
  border-radius: 5px;
  box-shadow: 1px 2px 3px 0 rgba(76, 76, 76, 0.5);
  background-color: ${({ disabled, background }) =>
    getBackground(disabled, background)};
`;

const Buttons = (props: {
  label: string;
  color?: string;
  background?: string;
  disabled?: boolean;
}) => {
  const { disabled = false } = props;
  return (
    <Button
      disabled={disabled}
      color={props.color}
      background={props.background}
    >
      {props.label}
    </Button>
  );
};

export default Buttons;
