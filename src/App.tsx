import React, { useContext, useEffect, useRef, useState } from "react";

import "./App.css";
import background from "./images/background.png";
import styled from "styled-components";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { Route, Router, Routes, useLocation } from "react-router";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Rules } from "./Pages/Rules";
import { Checklist } from "./Pages/Checklist";
import { Itenerary } from "./Pages/Iteneray";
import { Footer } from "./Footer";
import { Merch } from "./Pages/Merch";
import { AppStateContext } from "./Providers/AppStateProvider";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-color: #0da49b;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  color: white;
  font-size: 1rem;
  iframe {
    background-color: #334b49;
  }
  hr {
    margin: 4rem 1rem;
  }
`;

const App = () => {
  const ref = useRef({} as HTMLDivElement);

  const { path } = useContext(AppStateContext);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0 });
    }
  }, [path]);
  return (
    <>
      <AppContainer ref={ref}>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cruise2023" element={<Home />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/itenerary" element={<Itenerary />} />
            <Route path="/merch" element={<Merch />} />
          </Routes>
        </HashRouter>
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
