import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  background-color: white;
  position: relative;
  //   height: 100vh;
  //   padding-bottom: 8em;

  #youtube {
    display: inline-block;
    width: 100vw;
    margin-top: 1em;
    margin: auto;
    position: relative;
    iframe {
      width: 100vw;
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
  text-align: center;
`;

export const LoopingVideo = () => {
  const [isVisable, setIsVisable] = useState(false);

  // 1. Mo's tips
  // https://www.youtube.com/embed/mNgPuLpEebw
  // 2. Lexia's fav
  // https://www.youtube.com/embed/jDXhhEsXdXs
  // 3. Gloria's tips
  // https://www.youtube.com/embed/mNgPuLpEebw

  useEffect(() => {
    setIsVisable(true);
  }, []);

  return (
    <VideoContainer>
      <div id="youtube">
        <iframe
          src={
            isVisable
              ? "https://www.youtube.com/embed/OWGFfb7ovMw?autoplay=1&controls=0&showInfo=0&mute=1"
              : "https://www.youtube.com/embed/BNTs6-pNFRk?mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <GetReadyContainer>
          GET
          <br /> READY
        </GetReadyContainer>
      </div>
    </VideoContainer>
  );
};
