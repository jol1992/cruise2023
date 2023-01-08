import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HeaderText } from "./Components/Header";
import { CountdownTimer } from "./CountdownTimer";
import { AlternatingColorText } from "./Header/Header";
import paradise from "./images/paradise.jpg";

const VideoContainer = styled.div`
  background-color: white;
  position: relative;
  //   height: 100vh;
  //   padding-bottom: 8em;
  background-attachment: fixed;
  background: url(${paradise}) no-repeat center;
  background-size: cover;

  #youtube {
    display: inline-block;
    width: 100vw;
    height: 100vh;
    margin-top: 1em;
    margin: auto;
    position: relative;

    iframe {
      width: 100vw;
    }
    img {
      height: 100vh;

      display: block;
      margin-left: auto;
      margin-right: auto;
      // width: 50%;
    }
  }

  //   div {
  //     flex: 1;
  //     font-size: 4em;
  //     color: #9DC6E7ff;
  //   }
  iframe {
    // aspect-ratio: 16/9;
    width: 400vw;
    // width: clamp(2em, 2em + 40vw, 100vw);
    justify-self: center;
    height: 100vh;
    border-bottom: solid white 1rem;
    // border-left: none;
    // border-right: none;
  }
`;

const GetReadyContainer = styled.div`
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

  #content {
    font-family: "Inspiration";
  }
`;

const TitleContainer = styled.div`
  background-color: #ffffffd4;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: #2f5060 20px 20px 20px;
  border-radius: 10px;
  max-width: 700px;
  margin: auto;
  margin-top: 4rem;
  align-items: center;
  position: relative;
  font-size: clamp(3.2rem, 1.2rem + 10vw, 4rem);
  gap: 1rem;
`;

export const LoopingVideo = () => {
  const [isVisable, setIsVisable] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  // 1. Mo's tips
  // https://www.youtube.com/embed/mNgPuLpEebw
  // 2. Lexia's fav
  // https://www.youtube.com/embed/jDXhhEsXdXs
  // 3. Gloria's tips
  // https://www.youtube.com/embed/mNgPuLpEebw

  useEffect(() => {
    setIsVisable(true);
  }, []);

  // mobile video: OWGFfb7ovMw

  const handleResize = () => {
    setIsMobile(window.innerWidth < 395);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <VideoContainer>
      <div id="youtube">
        <>
          {!isMobile && (
            <iframe
              src={
                isVisable
                  ? "https://www.youtube.com/embed/BNTs6-pNFRk?autoplay=1&controls=0&showInfo=0&mute=1"
                  : "https://www.youtube.com/embed/BNTs6-pNFRk?mute=1"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          )}
        </>

        <GetReadyContainer>
          <div style={{ position: "absolute", top: "40px" }}>
            <div id="content" style={{ position: "relative", zIndex: "1" }}>
              <div>Carnival Valor</div>

              <div style={{ position: "relative", top: "-20px" }}>2023</div>
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                color: "white",
                position: "relative",
                top: "-8.3rem",
                zIndex: "0",
              }}
            >
              New Orleans
            </div>
            <TitleContainer>
              <HeaderText size="4">
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                  }}
                >
                  <AlternatingColorText text="Crusin'" />
                  {/* <span>23</span> */}
                </div>
              </HeaderText>
              <div style={{ fontSize: "20px" }}>
                Thurs <strong>June 8, 2023</strong> - <br />
                Sun <strong>June 12, 2023</strong>{" "}
              </div>
              <CountdownTimer />
            </TitleContainer>
          </div>
        </GetReadyContainer>
      </div>
    </VideoContainer>
  );
};
