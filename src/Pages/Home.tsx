import { Footer } from "../Footer";
import { HeroContainer } from "../HeroContainer";
import { VideoTipsSection } from "../VideoTipsSection";
import { StarringContainer } from "../Components/Starring";
import { HeaderText } from "../Components/Header";
import { Itenerary } from "./Iteneray";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useContext, useEffect, useRef } from "react";
import { AppStateContext } from "../Providers/AppStateProvider";

const IteneraryButton = styled.div`
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

export const Home = () => {
  const nav = useNavigate();

  const { setPath } = useContext(AppStateContext);
  const handleClick = () => {
    nav("/itenerary");
    setPath("/itenerary");
  };

  return (
    <div>
      <HeroContainer />
      <StarringContainer />
      <VideoTipsSection />
      <div
        style={{
          backgroundColor: "#334b49",
          textAlign: "center",
          padding: "4rem 0",
        }}
      >
        <HeaderText>Enough Talk</HeaderText>
        <div style={{ marginBottom: "4rem" }}>LETS GO!</div>
        <div style={{ display: "flex" }}>
          <IteneraryButton onClick={handleClick}>
            <strong>View Itenerary</strong>
          </IteneraryButton>
        </div>
      </div>
    </div>
  );
};
