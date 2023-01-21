import React from "react";
import styled from "styled-components";
import { People } from "../../People";

import star from "../../images/star.png";

const StaringContainer = styled.div`
  display: inline-block;
  color: white;
  background-color: white;
`;

const Header = styled.div`
  margin-left: calc(2rem + 30px);
  font-family: "TikiTropicBold";
  margin-top: 30px;
  margin-bottom: 2rem;
  font-size: 2rem;
  transform-origin: 0 0;
  transform: rotate(90deg);
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  top: 30%;
  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    transform: rotate(0deg);
    margin-left: 0;
    top: 0;
    z-index: 2;
    text-align: center;
    background-color: #334b49e0;
    margin-top: 0;
    padding: 1.2rem;
  }
`;

const MissingButton = styled.div`
  color: white;
  background-color: #334b49e0;
  margin: auto;
  padding: 1rem 3rem;
  border-radius: 10px;
  background-color: #51beb7;
  box-shadow: 7px 5px 7px #00000073;
  &:hover {
    cursor: pointer;
  }
`;

export const StarringContainer = () => {
  return (
    <StaringContainer>
      <Header>
        <img src={star} />
        <div>Starring</div>
        <img src={star} />
      </Header>
      <People />
      <div style={{ display: "flex", margin: "3rem 0" }}>
        <MissingButton
          onClick={() =>
            window.open(
              `https://www.carnival.com/booking/rooms-and-guests?embkCode=MSY&itinCode=WCD&durDays=4&shipCode=VA&subRegionCode=CW&sailDate=06082023&sailingID=96338&numGuests=2&isMilitary=N&isOver55=N&isPastGuest=N&stateCode=&evsel=&locality=1&currency=USD`
            )
          }
        >
          <div>Missing?</div>
          <strong>JOIN US</strong>
        </MissingButton>
      </div>
    </StaringContainer>
  );
};
