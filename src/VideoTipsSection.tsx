import React from "react";
import styled from "styled-components";
import { VideoTips } from "./Components/VideoTips";
import cat from "./images/cat.png";
import lexia from "./images/lexia.jpg";
import monique from "./images/monique.jpg";
import justin from "./images/justin.jpg";
import wave from "./images/wave.svg";
import gloria from "./images/Gloria.jpg";
import { AlternatingColorText } from "./Header/Header";
import { HeaderText } from "./Components/Header";

const MainVideoContianer = styled.div`
  background-color: #0da49bff;
  position: relative;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;

    #youtube {
      iframe {
        width: 100%;
      }
    }
  }
  div {
    flex: 1;
    // font-size: 4em;
    color: white;
  }
  iframe {
    aspect-ratio: 16/9;
    width: clamp(2em, 2em + 40vw, 100vw);
    width: 100%;
    justify-self: center;
    border: solid white 5px;
  }
`;

const VideoTipsContainer = styled.div`
  background-color: #0da49bff;
  z-index: 1;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  color: white;
  gap: 4rem;
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  #videoDiv {
    flex: 1;
  }
  div > iframe {
    width: 100%;
    aspect-ratio: 16/9;
  }
`;

const NoProb = styled.div`
  color: white;
  -webkit-text-stroke-color: #9dc6e7ff;
  @media (max-width: 768px) {
    -webkit-text-stroke-width: 2px;
  }
`;

const SectionHeader = styled.div`
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

const SectionBody = styled.div`
  background-color: #0da49bff;
  display: flex;
  flex-direction: column;
  //   padding: "2em",
  padding-bottom: 8em;
  justify-content: center;
  gap: 8rem;
  max-width: 1339px;
  margin: auto;
`;

export const VideoTipsSection = () => {
  const moniquesVideo = "https://www.youtube.com/embed/vC4QkkkQuxQ?control=0";
  const lexiasVideo = "https://www.youtube.com/embed/Ae0sDdVVNVo";
  const justinsVideo = "https://www.youtube.com/embed/KIeytFLhcTY";
  const gloriasVideo = "https://www.youtube.com/embed/73h_ClDN9bg";

  // Welcome to ship: https://www.youtube.com/embed/Ae0sDdVVNVo

  return (
    <>
      <img src={wave} style={{ zIndex: 1 }} />
      <VideoTipsContainer>
        <SectionHeader>
          <HeaderText size="6" style={{ textAlign: "center" }}>
            First Time?
            <NoProb>No Problem</NoProb>
          </HeaderText>
        </SectionHeader>

        <SectionBody>
          <MainVideoContianer>
            <div>
              <div id="youtube">
                <iframe
                  src="https://www.youtube.com/embed/5COjJdjmvLI"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </MainVideoContianer>
          <Row>
            <VideoTips image={monique} name="Monique" video={moniquesVideo} />
            <VideoTips image={lexia} name="Lexia" video={lexiasVideo} />
          </Row>
          <Row>
            <VideoTips image={gloria} name="Gloria" video={gloriasVideo} />
            <VideoTips image={justin} name="Justin" video={justinsVideo} />
          </Row>
        </SectionBody>
      </VideoTipsContainer>
    </>
  );
};
