import React from "react";
import styled from "styled-components";
import { CountdownTimer } from "../CountdownTimer";
import { AlternatingColorText } from "../Header/Header";
import { HeaderText } from "./Header";

const InfoContainer = styled.div`
  background-color: #ffffffd4;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: #2f5060 20px 20px 20px;
  border-radius: 10px;
  max-width: 700px;
  margin: auto;
  margin-top: 4rem;
  align-items: center;
  position: relative;
  font-size: clamp(3.2rem, 1.2rem + 10vw, 4rem);
  gap: 1rem;
`;

const Title = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Body = styled.div`
  font-size: 20px;
  text-align: left;
`;

export const TripInfoBlock = () => {
  return (
    <InfoContainer>
      <HeaderText size="4">
        <Title>
          <AlternatingColorText text="Crusin'" />
        </Title>
      </HeaderText>
      <Body>
        Thurs <strong>June 8, 2023</strong> - <br />
        Sun <strong>June 12, 2023</strong>{" "}
      </Body>
      <CountdownTimer />
    </InfoContainer>
  );
};
