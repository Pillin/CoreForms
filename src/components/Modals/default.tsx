import React from "react";
import Modal from "react-modal";
import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import breakpoints from "../../constants/breakpoints";

const ContainerModal = styled(Modal)`
  height: fit-content;
  overflow-y: scroll;
  max-height: calc(100vh);
  min-height: 200px;
  opacity: 1;
  display: flex;
  border-radius: 10px;
  border: solid 1px #979797;
  margin: 0 auto;
  margin-top: 10px;
  flex-direction: column;
  width: 425px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.7);
  background-color: #ffffff;

  @media (${breakpoints.mobileM.max}) {
    width: 100%;
  }
`;

const CloseButton = styled.div`
  display: flex;
  padding: 7px 5px 0px 0px;
  color: rgba(0, 0, 0, 0.2);
  font-size: 14px;
  z-index: 10;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  flex-direction: row-reverse;
`;

const DefaultModal = (props: {
  open: boolean;
  setOpen: Function;
  children: JSX.Element;
}) => (
  <ContainerModal
    ariaHideApp={false}
    isOpen={props.open}
    onRequestClose={() => props.setOpen(false)}
    style={{
      overlay: {
        backgroundColor: "rgba(8, 3, 8, 0.75)"
      }
    }}
  >
    <CloseButton>
      <CloseOutlined onClick={() => props.setOpen(false)} />
    </CloseButton>
    {props.children}
  </ContainerModal>
);

export default DefaultModal;
