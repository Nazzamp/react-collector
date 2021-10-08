import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function ArrowLeft(props) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    props.setOpen(isOpen);
  });

  return (
    <Wrap onClick={() => setIsOpen(!isOpen)}>
      <Arrow status={isOpen} />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  margin: 16px 0;
`;

const Arrow = styled.div`
  color: #000;
  position: absolute;
  margin-left: 3px;
  margin-top: 10px;
  width: 16px;
  height: 1px;
  background-color: #fff;

  &:before {
    content: "";
    position: absolute;
    left: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid 1px #fff;
    border-right: solid 1px #fff;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    transition: all 0.3s ease-in;

    ${(props) =>
      !props.status &&
      css`
        left: auto;
        right: -1px;
        border-top: none;
        border-right: none;
        border-bottom: solid 1px #fff;
        border-left: solid 1px #fff;
      `}
  }
`;

export default ArrowLeft;
