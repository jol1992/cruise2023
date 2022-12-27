import React from "react";

import "./App.css";
import background from "./images/background.png";
import carnLogo from "./images/carnival-logo.png";
import cat from "./images/cat.png";
import jamvisions from "./images/jamvisions.svg";
import wave from "./images/wave.svg";
import styled from "styled-components";

import { People } from "./People";
import { FunSection } from "./FunSection";
import { MoniquesTips } from "./MoniquesTips";
import { Footer } from "./Footer";
import { CountdownTimer } from "./CountdownTimer";
import { AlternatingColorText } from "./Header/Header";
import { GreetingPage } from "./GreetingPage";
import { LoopingVideo } from "./LoopingVideo";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${background});
  background-position: center;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Header = styled.div<{ size?: string }>`
  font-size: clamp(
    1.2em,
    1.2em + 10vw,
    ${({ size }) => (size ? `${size}em` : "7em")}
  );
  color: #528070;
  font-family: "TikiTropicBold";
`;

const HeaderContent = styled.div`
  max-width: 768px;
  margin: auto;
  position: relative;
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

const Logo = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  max-width: 250px;
  right: 0;
  position: absolute;
  bottom: 0;
  img {
    width: 100%;
  }
`;

const WhiteContainer = styled.span`
  color: white;
  -webkit-text-stroke-width: 8px;
  -webkit-text-stroke-color: #528070;
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
  // width: clamp(10em, 10em + 20vw, 70em);
  // padding: 4em 8em;
  // padding-left: clamp()
`;

const HeaderContainer = styled.div`
  background-color: #c9fce9;
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
`;

const StaringContainer = styled.div`
  display: inline-block;

  font-family: "TikiTropicBold";
  color: white;
  #label {
    margin-left: calc(4rem + 30px);
    margin-top: 30px;
    font-size: 4rem;
    transform-origin: 0 0;
    transform: rotate(90deg);
  }
`;

const App = () => {
  return (
    <>
      <AppContainer>
        <HeaderContainer>
          <HeaderContent>
            <Header>
              The trip you'll <WhiteContainer>NEVER</WhiteContainer> forget
            </Header>

            <TitleContainer>
              <Header size="4">
                <AlternatingColorText text="Crusin' 20" />
                <span>23</span>
              </Header>
              <>June 8, 2023</>
              <CountdownTimer />

              {/* <CarnivalContainer>
            <img src={carnLogo} />
          </CarnivalContainer> */}
            </TitleContainer>
            <Sponsors>
              <img
                src={carnLogo}
                style={{ maxWidth: "200px", margin: "auto" }}
              />
              <span>x</span>

              <img src={jamvisions} style={{ maxWidth: "100px" }} />
            </Sponsors>
          </HeaderContent>

          <Logo>
            <img src={cat} />
          </Logo>
        </HeaderContainer>
        <StaringContainer>
          <div id="label">Starring</div>

          <People />
        </StaringContainer>

        <img src={wave} />
        <LoopingVideo />
        <FunSection />
        <MoniquesTips />
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
