import React from "react";
import Button from "./default";

export const RedButton = (props: { label: string; disabled?: boolean }) => (
  <Button label={props.label} background="#ee2737" disabled={props.disabled} />
);
export const YellowButton = (props: { label: string; disabled?: boolean }) => (
  <Button
    label={props.label}
    background="#ffb81c"
    color="#523178"
    disabled={props.disabled}
  />
);
export const PurpleButton = (props: { label: string; disabled?: boolean }) => (
  <Button label={props.label} background="" disabled={props.disabled} />
);
