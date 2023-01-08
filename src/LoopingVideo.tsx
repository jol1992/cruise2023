import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  //     color: #528070;
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
  font-size: 23.5vw;
  font-weight: 900;
  color: #fff;
  color: #528070;
  text-align: center;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 3px;
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
          GET
          <br /> READY
        </GetReadyContainer>
      </div>
    </VideoContainer>
  );
};
