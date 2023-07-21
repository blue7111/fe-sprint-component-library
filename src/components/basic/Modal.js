import { Button } from "./buttons/Button";
import { useState } from "react";
import { styled } from "styled-components";
import globalToken from "../../tokens/global.json";
import { BodyText } from "./atoms/Typography";
import { Icon } from "./atoms/Icon";
const { boxShadow, Spacing, borderRadius, White } = globalToken;

export const Container = styled.div`
  position: relative;
`;

export const ModalBG = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #00000040;
`;

export const ModalView = styled.div`
  z-index: 15;
  position: fixed;
  background-color: ${White.value};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-shadow: ${boxShadow.modal.x.value}px ${boxShadow.modal.y.value}px
    ${boxShadow.modal.blur.value}px ${boxShadow.modal.spread.value}px
    ${boxShadow.modal.color.value};
  padding: ${Spacing[24].value}px;
  border-radius: ${borderRadius[8].value}px;
`;

const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quae, consequatur amet quasi expedita dolorem?";

export const Modal = ({ backdrop }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container>
      <Button
        primary={true}
        label={"Open Modal"}
        onClick={() => setIsOn((prev) => !prev)}
      />
      {isOn && backdrop && <ModalBG />}
      {isOn && (
        <ModalView>
          <BodyText children={text} />
          <Icon icon={"X"} size={48} onClick={() => setIsOn((prev) => !prev)} />
        </ModalView>
      )}
    </Container>
  );
};
