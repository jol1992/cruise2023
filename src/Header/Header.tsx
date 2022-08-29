import React from "react";
import styled from "styled-components";
const lightColor = "#78b7a1";
const darkColor = "#528070";

interface TextProps {
  text: string;
}

const Letter = styled.span`
  font-family: "TikiTropicBold";
`;
export const AlternatingColorText: React.FC<TextProps> = ({ text }) => {
  return (
    <>
      {text.split("").map((letter, i) => {
        const color = i % 2 === 0 ? darkColor : lightColor;
        return <Letter style={{ color: color }}>{letter}</Letter>;
      })}
    </>
  );
};
