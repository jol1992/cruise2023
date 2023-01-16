import React from "react";

import "./App.css";
import background from "./images/background.png";
import styled from "styled-components";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Rules } from "./Pages/Rules";
import { Checklist } from "./Pages/Checklist";
import { Itenerary } from "./Pages/Iteneray";
import { Footer } from "./Footer";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-color: #0da49b;
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
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/itenerary" element={<Itenerary />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
