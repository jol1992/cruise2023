import React from "react";
import styled from "styled-components";
import jamVision from "./images/jamvisions.svg";

const FooterContainer = styled.div`
  background-color: white;
  padding: 2em;
  color: #334b49;
  img {
    width: 40px;
  }
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Footer = () => {
  return (
    <FooterContainer>
      <div>Created by</div> <img src={jamVision} />
    </FooterContainer>
  );
};
