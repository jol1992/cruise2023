import React from "react";

import "./App.css";
import background from "./images/background.png";
import carnLogo from "./images/carnival-logo.png";
import wave from "./images/wave.svg";
import styled from "styled-components";

import { People } from "./People";
import { FunSection } from "./FunSection";
import { MoniquesTips } from "./MoniquesTips";
import { Footer } from "./Footer";
import { CountdownTimer } from "./CountdownTimer";
import { AlternatingColorText } from "./Header/Header";
import { GreetingPage } from "./GreetingPage";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${background});
  background-position: center;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Header = styled.div`
  font-size: clamp(1.2em, 1.2em + 10vw, 7em);
  color: #528070;
  font-family: "TikiTropicBold";
`;

const StyledDivier = styled.fieldset`
  border-top: 1px solid #aaa;
  border-bottom: none;
  border-left: none;
  border-right: none;
  display: block;
  text-align: center;
  color: white;
  legend {
    padding: 5px 10px;
  }
`;
const CarnivalContainer = styled.div`
  img {
    width: 15em;
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
  // width: clamp(10em, 10em + 20vw, 70em);
  // padding: 4em 8em;
  // padding-left: clamp()
`;

const HeaderContainer = styled.div`
  background-image: linear-gradient(
    to top,
    #2e61f1,
    #3b70f1,
    #4b7ef1,
    #5c8bef,
    #6e98ec,
    #67a6f2,
    #65b3f6,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  padding: 4em;
  font-size: 1em;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const App = () => {
  return (
    <>
      <AppContainer>
        <HeaderContainer>
          <TitleContainer>
            <Header>
              <AlternatingColorText text="Crusin' 20" />
              <span>23</span>
            </Header>
            <CountdownTimer />
            {/* <CarnivalContainer>
            <img src={carnLogo} />
          </CarnivalContainer> */}
          </TitleContainer>
        </HeaderContainer>
        <StyledDivier>
          <legend>STARRING</legend>
        </StyledDivier>
        <People />
        <img src={wave} />
        <FunSection />
        <MoniquesTips />
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
