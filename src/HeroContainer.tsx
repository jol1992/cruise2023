import React, { useEffect, useState } from "react";
import styled from "styled-components";
import paradise from "./images/paradise.jpg";
import carnLogo from "./images/carnival-logo.png";
import { TripInfoBlock } from "./Components/TripInfoBlock";

const StyledHeroContainer = styled.div`
  background-color: white;
  position: relative;
  background-attachment: fixed;
  background: url(${paradise}) no-repeat center;
  background-size: cover;

  iframe {
    width: 400vw;
    justify-self: center;
    height: 100vh;
    border-bottom: solid white 1rem;
  }
`;

const HeroBody = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  top: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: #334b49;
  text-align: center;
`;
const HeroContent = styled.div`
  display: inline-block;
  width: 100vw;
  height: 100vh;
  margin-top: 1em;
  margin: auto;
  position: relative;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Sponsors = styled.span`
  max-width: 238px;
  display: flex;
  align-items: center;
  gap: 2em;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 200px;
  }

  img {
    max-width: 160px;
    margin: auto;
  }
`;

const Title = styled.div`
  position: relative;
  z-index: 1;
  font-family: "Inspiration";
  #subHeading {
    position: relative;
    top: -20px;
  }
`;

const HeroHeader = styled.div`
  position: absolute;
  top: 40px;
`;
const Location = styled.div`
  font-size: 1.5rem;
  color: white;
  position: relative;
  top: -8.3rem;
  z-index: 0;
`;
const HeroFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeroContainer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 395);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <StyledHeroContainer>
      <HeroContent>
        <HeroBody>
          <HeroHeader>
            <Title>
              <>Carnival Valor</>
              <div id="subHeading">2023</div>
            </Title>
            <Location>New Orleans</Location>
            <TripInfoBlock />
          </HeroHeader>
        </HeroBody>
        <HeroFooter>
          <Sponsors>
            <img src={carnLogo} />
          </Sponsors>
        </HeroFooter>
      </HeroContent>
    </StyledHeroContainer>
  );
};
