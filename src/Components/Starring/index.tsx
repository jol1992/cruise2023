import React from "react";
import styled from "styled-components";
import { People } from "../../People";

import star from "../../images/star.png";

const StaringContainer = styled.div`
  display: inline-block;
  font-family: "TikiTropicBold";
  color: white;
  background-color: white;
`;

const Header = styled.div`
  margin-left: calc(2rem + 30px);
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

export const StarringContainer = () => {
  return (
    <StaringContainer>
      <Header>
        <img src={star} />
        <div>Starring</div>
        <img src={star} />
      </Header>
      <People />
    </StaringContainer>
  );
};
