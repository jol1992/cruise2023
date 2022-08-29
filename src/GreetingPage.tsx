import React, { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { isPropertySignature } from "typescript";

const StyledHalf = styled.div<{
  color: string;
  change: boolean;
  left?: boolean;
}>`
  right: ${(props) => (props.left === true ? 100 : 0)};

  width: 50vw;
  height: 100vh;
  position: absolute;
  transition: background 3s;
  background: ${(props) => (props.change ? "red" : "white")};
`;

const GreetingContaitainer = styled.div<{ change: boolean }>`
  .open {
    transition: all 3s;
    background: ${(props) => (props.change ? "red" : "white")};
  }
`;

export const GreetingPage = (props: any) => {
  const [leftName, setLeftName] = useState("open");
  const [rightName, setRigtName] = useState("open");
  const [clicked, setClicked] = useState(false);

  const handleOnclick = () => {
    setLeftName("open");
    setRigtName("open");
    setClicked(!clicked);
  };
  const Half: FC<{ left: boolean }> = ({ left }) => {
    return (
      <>
        <StyledHalf
          className={left ? leftName : rightName}
          left={left}
          color={left ? "red" : "blue"}
          change={clicked}
        />
      </>
    );
  };
  return (
    <GreetingContaitainer
      onClick={handleOnclick}
      change={clicked}
      className={props.className}
    >
      <Half left={true}></Half>
      <Half left={false}></Half>
    </GreetingContaitainer>
  );
};
