import React from "react";
import styled from "styled-components";

const YoutubeContainer = styled.div`
  // display: inline-block;
`;

const FunContainer = styled.div`
  background-color: #c9fce9;
  position: relative;
  padding: 2em;

  padding-bottom: 8em;
  @media (max-width: 768px) {
    flex-direction: column;

    #youtube {
      display: inline-block;
      margin-top: 1em;
      iframe {
        width: 100%;
      }
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
    border: solid white 5px;
  }
`;
export const FunSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#c9fce9",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FunContainer>
        {/* <div>
          <span style={{ fontWeight: 100, fontFamily: "TikiTropicBold" }}>
            y'all better be
          </span>{" "}
        </div> */}

        <YoutubeContainer>
          <div id="youtube" style={{ display: "inline-block", margin: "auto" }}>
            <iframe
              src="https://www.youtube.com/embed/5COjJdjmvLI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          {/* <span
            style={{
              fontWeight: 500,
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              position: "absolute",
              right: "-5em",
              top: "40%",
              fontFamily: "TikiTropicBold",
            }}
          >
            READY
          </span> */}
        </YoutubeContainer>
      </FunContainer>
    </div>
  );
};
