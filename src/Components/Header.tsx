import React from "react";
import styled from "styled-components";
import { CountdownTimer } from "../CountdownTimer";
import { AlternatingColorText } from "../Header/Header";
import carnLogo from "../images/carnival-logo.png";
import cat from "../images/cat.png";
import jamvisions from "../images/jamvisions.svg";
import logo from "../images/logo.svg";

export const HeaderText = styled.div<{ size?: string; mt?: string }>`
  font-size: clamp(
    3.2rem,
    1.2rem + 10vw,
    ${({ size }) => (size ? `${size}rem` : "7rem")}
  );

  @media (max-width: 768px) {
    text-align: center;
  }

  // color: #334b49;
  font-family: TikiTropicBold;
`;

const HeaderContent = styled.div`
  max-width: 768px;
  margin: auto;
  position: relative;
`;

const WhiteContainer = styled.span`
  color: white;
  -webkit-text-stroke-width: 8px;
  -webkit-text-stroke-color: #528070;
  @media (max-width: 768px) {
    -webkit-text-stroke-width: 4px;
  }
`;

const TitleContainer = styled.div`
  background-color: white;
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: #2f5060 20px 20px 20px;
  border-radius: 10px;
  max-width: 700px;
  margin: auto;
  margin-top: 4em;
  align-items: center;
`;

const HeaderContainer = styled.div`
  background-color: #0da49bff;
  padding: 8em;
  font-size: 1em;

  justify-content: center;
  @media (max-width: 768px) {
    padding-left: 1em;
    padding-right: 1em;
  }
  position: relative;
`;

const Sponsors = styled.span`
  max-width: 238px;
  display: flex;
  align-items: center;
  gap: 2em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const Logo = styled.div`
//   margin-left: auto;
//   display: flex;
//   justify-content: flex-end;
//   max-width: 250px;
//   right: 0;
//   position: absolute;
//   bottom: 0;
//   img {
//     width: 100%;
//   }
// `;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderText>
          The trip you'll <WhiteContainer>NEVER</WhiteContainer> forget
        </HeaderText>

        {/* <TitleContainer>
          <HeaderText size="4">
            <div
              style={{
                display: "inline-block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              <AlternatingColorText text="Crusin' 20" />
              <span>23</span>
            </div>
          </HeaderText>
          <>June 8, 2023</>
          <CountdownTimer />
        </TitleContainer> */}
      </HeaderContent>
      {/* 
      <Logo>
        <img src={cat} />
      </Logo> */}
    </HeaderContainer>
  );
};
