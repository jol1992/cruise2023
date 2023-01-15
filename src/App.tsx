import React from "react";

import "./App.css";
import background from "./images/background.png";
import styled from "styled-components";
import { VideoTipsSection } from "./VideoTipsSection";
import { Footer } from "./Footer";
import { HeroContainer } from "./HeroContainer";
import { StarringContainer } from "./Components/Starring";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Rules } from "./Pages/Rules";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  // background: url(${background});
  background-position: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  color: white; b  
`;

const App = () => {
  return (
    <>
      <AppContainer>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cruise2023" element={<Home />} />
            <Route path="/checklist" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/itenerary" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </>
  );
};

export default App;
