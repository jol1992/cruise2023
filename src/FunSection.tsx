import React from "react";
import styled from "styled-components";
import { VideoTips } from "./Components/VideoTips";
import cat from "./images/cat.png";
import lexia from "./images/lexia.jpg";
import monique from "./images/monique.jpg";
import gloria from "./images/Gloria.jpg";
import { AlternatingColorText } from "./Header/Header";
import { HeaderText } from "./Components/Header";

const FunContainer = styled.div`
  background-color: #0da49bff;
  position: relative;
  padding: 5px;
  // margin: auto;
  // padding-bottom: 8em;

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
    @media (max-width: 768px) {
      width: 100%;
    }
    justify-self: center;
    border: solid white 5px;
  }
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
export const FunSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#0DA49Bff",
        zIndex: "1",
      }}
    >
      <div style={{ marginTop: "4rem", marginBottom: "6rem" }}>
        <HeaderText size="1">
          First Time?
          {/* <AlternatingColorText text="First Time?" /> */}
          <NoProb>No Problem</NoProb>
        </HeaderText>
      </div>
      <div
        style={{
          backgroundColor: "#0DA49Bff",
          display: "flex",
          flexDirection: "column",
          //   padding: "2em",
          paddingBottom: "8em",
          justifyContent: "center",
          gap: "8rem",
        }}
      >
        <FunContainer>
          <div>
            <div id="youtube">
              <iframe
                src="https://www.youtube.com/embed/5COjJdjmvLI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </FunContainer>
        <Row>
          <VideoTips
            image={monique}
            name="Monique"
            video="https://www.youtube.com/embed/vC4QkkkQuxQ?control=0"
          />
          <VideoTips
            image={lexia}
            name="Lexia"
            video="https://www.youtube.com/embed/jDXhhEsXdXs"
          />
          <VideoTips
            image={gloria}
            name="Gloria"
            video="https://www.youtube.com/embed/sDO_mnH14HE"
          />
        </Row>
      </div>
    </div>
  );
};
