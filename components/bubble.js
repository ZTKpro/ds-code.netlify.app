import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div`
  z-index: ${({ zIndex }) => zIndex || "0"};
  position: ${({ position }) => position || "relative"};
  top: ${({ top }) => top || "0"};
  left: ${({ left }) => left || "0"};
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  transition: ${({ transition }) => transition || "0.3s"};
  cursor: ${({ cursor }) => cursor || "default"};
  opacity: ${({ opacity }) => opacity || "1"};
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(#4ef9fe, #0696ff);
  border-radius: 50%;
`;

const StyledInside = styled.div`
  height: 90%;
  width: 90%;
  background-color: black;
  border-radius: 50%;
`;

export default function Bubble(props) {
  return (
    <StyledWrapper {...props}>{props.inside && <StyledInside />}</StyledWrapper>
  );
}
