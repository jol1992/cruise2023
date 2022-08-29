import React from "react";
import styled from "styled-components";
import ball from "./images/beachball.gif";

const Tips = styled.div`
  color: white;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MoniquesTipsContainer = styled.div`
  background-color: #528070;
  display: flex;
  flex-direction: column;
  padding: 4em;
  img {
    width: clamp(0.5em, 0.5em + 20vw, 20em);
    height: clamp(0.5em, 0.5em + 20vw, 20em);
    aspect-ratio: 50/50;
  }
  p {
    align-self: center;
    color: white;
  }

  header {
    font-size: 4em;
    align-self: center;
    color: #c9fce9;
  }
`;
const BallContainer = styled.div`
  display: flex;
  align-items: end;
`;
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c9fce9;
  border-radius: 10px;
  box-shadow: 10px 20px 20px #3d4648;
  width: clamp(5em, 5em + 30vw, 24em);
  p {
    color: #528070;
    font-size: clamp(0.5em, 0.5em + 10vw, 3em);
    font-weight: 300;
  }
  a {
    align-self: center;
  }
`;
export const MoniquesTips = () => {
  return (
    <MoniquesTipsContainer>
      <header>
        <span style={{ fontWeight: 200 }}>before we have</span>{" "}
        <span style={{ fontWeight: 500 }}>FUN</span>
        ...
      </header>
      <p>Make sure you have everything</p>
      <Tips>
        <BallContainer>
          <img src={ball} />
        </BallContainer>
        <RightColumn>
          <p>Download Mo's CheckList</p>
          <a href="/files/CarnivalList.docx" download>
            Click to download
          </a>
        </RightColumn>
      </Tips>
    </MoniquesTipsContainer>
  );
};
