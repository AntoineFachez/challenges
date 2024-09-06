import React from "react";
import styled from "styled-components";

export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack}></StyledBox>;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
