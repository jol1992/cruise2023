import React, { useState } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  background-color: #c9fce9;
  position: relative;


  padding-bottom: 8em;

  #youtube {
    display: inline-block;\
    width: 100%;
    margin-top: 1em;
    iframe {
      width: 100%;
    }
  }

  div {
    flex: 1;
    font-size: 4em;
    color: #528070;
  }
  iframe {
    aspect-ratio: 16/9;
    width: clamp(2em, 2em + 40vw, 100vw);
    justify-self: center;
    border: solid white 1rem;
    border-left: none;
    border-right:none;
  }
`;

export const LoopingVideo = () => {
  const domRef = React.useRef<HTMLDivElement>(null);
  const [isVisable, setIsVisable] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!isVisable) setIsVisable(entry.isIntersecting);
      });
    });
    const { current } = domRef;
    if (current) observer.observe(current);
    if (current) return () => observer.unobserve(current);
  });

  return (
    <VideoContainer>
      <div
        id="youtube"
        style={{ margin: "auto", position: "relative" }}
        ref={domRef}
      >
        <iframe
          src={
            isVisable
              ? "https://www.youtube.com/embed/BNTs6-pNFRk?autoplay=1&mute=1"
              : "https://www.youtube.com/embed/BNTs6-pNFRk?mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100vw",
            top: "0",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "23.5vw",
            fontWeight: "900",
            // mixBlendMode: "multiply",
            color: "#fff",
            textAlign: "center",
            letterSpacing: "-25px",
          }}
        >
          GET
          <br /> READY
        </div>
      </div>
    </VideoContainer>
  );
};
