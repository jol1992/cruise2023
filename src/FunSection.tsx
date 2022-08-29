import React from "react";
import styled from "styled-components";

const FunContainer = styled.div`
  display: flex;
  background-color: #c9fce9;
  padding: 2em;
  padding-bottom: 8em;
  @media (max-width: 768px) {
    flex-direction: column;

    #youtube {
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
    width: clamp(2em, 2em + 40vw, 11em);
    justify-self: center;
    border: solid white 5px;
  }
`;
export const FunSection = () => {
  return (
    <FunContainer>
      <div style={{ display: "table-caption" }}>
        <span style={{ fontWeight: 200 }}>y'all better be</span>{" "}
        <span style={{ fontWeight: 500 }}>READY</span>
      </div>
      <div id="youtube">
        <iframe
          src="https://www.youtube.com/embed/5COjJdjmvLI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </FunContainer>
  );
};
