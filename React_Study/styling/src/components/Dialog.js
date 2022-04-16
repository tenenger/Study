import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components";
import StyledButton from "./StyledButton";

const FadeIn = keyframes`
from {
    opacity:0;
}
to{
    opacity:1
}
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(50%);
  }
`;

const Darkbackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${FadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  dialog,
  onConfirm,
  onCancel,
}) {
  //
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(dialog);

  useEffect(() => {
    //   visible값이 true → false가 되는 것을 감지
    if (localVisible && !dialog) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 3000);
    }
    setLocalVisible(dialog);
  }, [localVisible, dialog]);
  if (!animate && !localVisible) return null;
  return (
    <Darkbackground disappear={!dialog}>
      <DialogBlock disappear={!dialog}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <StyledButton color="gray" onClick={onCancel}>
            {cancelText}
          </StyledButton>
          <StyledButton color="pink" onClick={onConfirm}>
            {confirmText}
          </StyledButton>
        </ButtonGroup>
      </DialogBlock>
    </Darkbackground>
  );
}

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

export default Dialog;
