import React from "react";

import "./App.css";
import background from "./images/background.png";
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
import { Header } from "./Components/Header";

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

const StaringContainer = styled.div`
  display: inline-block;
  font-family: "TikiTropicBold";
  color: white;
  #label {
    margin-left: calc(2rem + 30px);
    margin-top: 30px;
    margin-bottom: 2rem;
    font-size: 2rem;
    transform-origin: 0 0;
    transform: rotate(90deg);
    position: sticky;
    top: 30%;
    @media (max-width: 768px) {
      transform: rotate(0deg);
      margin-left: 0;
      top: 0;
      z-index: 2;
      text-align: center;
      background-color: #528070f5;
      margin-top: 0;
      padding: 30px;
    }
  }
`;

const App = () => {
  return (
    <>
      <AppContainer>
        <LoopingVideo />
        <Header />

        <StaringContainer>
          <div id="label">Starring</div>
          <People />
        </StaringContainer>

        <img src={wave} style={{ zIndex: 1 }} />

        <FunSection />
        <MoniquesTips />
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
