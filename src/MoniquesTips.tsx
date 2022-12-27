import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import ball from "./images/beachball.gif";

const Tips = styled.div`
  color: white;
`;
const MoniquesTipsContainer = styled.div`
  background-color: #528070;
  display: flex;
  justify-content: center;
  padding: 4rem;
  img {
    width: clamp(0.5rem, 0.5rem + 20vw, 13rem);
    height: clamp(0.5rem, 0.5rem + 20vw, 13rem);
    aspect-ratio: 50/50;
  }
  p {
    align-self: center;
    color: white;
  }

  header {
    font-size: 4em;
    align-self: center;
    color: #c9fce9;
  }
`;
const animateBall = keyframes`
0%{
  transform:translate(-100vw,0)  rotate(0deg);

}
100%{transform:translate(0,0)  rotate(1440deg);}
`;

const BallContainer = styled.span<{ isVisable?: boolean }>`
  position: absolute;
  background-color: transparent;
  left: -13rem;
  bottom: 0;
  animation-name: ${({ isVisable }) => (isVisable ? animateBall : "")};
  animation-duration: 2s;
  animation-iteration-count: 1;
  visibility: ${({ isVisable }) => (isVisable ? "visable" : "hidden")};
`;
const RightColumn = styled.div`
  position: relative;
  margin-left: auto;

  background-color: #c9fce9;
  border-radius: 10px;
  box-shadow: 10px 20px 20px #3d4648;
  width: clamp(5em, 5em + 30vw, 24em);
  padding: 20px;
  p {
    color: #528070;
    font-size: clamp(0.5em, 0.5em + 10vw, 3em);
    font-weight: 300;
    margin-bottom: 2rem;
  }
  a {
    align-self: center;
    margin: 20px auto;
  }
  div {
    height: 2px;
    width: 100%;
    background-color: #528070;
  }
`;
const Row = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;
const CheckMark = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;

  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
  margin-right: 20px;
  #checkmark_kick {
    position: absolute;

    width: 3px;
    height: 3px;
    background-color: green;
    left: 8px;
    top: 12px;
    border: none;
  }
  #checkmark_stem {
    position: absolute;
    width: 3px;
    height: 9px;
    background-color: green;
    left: 11px;
    top: 6px;
    border: none;
  }
`;
const useOnScreen = (): [React.MutableRefObject<null>, boolean] => {
  const ref = useRef(null);
  const [isVisable, setIsvisable] = useState(false);
  const [beenSeen, setBeenSeen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsvisable(entry.isIntersecting);
        });
      },
      { threshold: 1.0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    if (isVisable) {
      setBeenSeen(true);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, isVisable]);
  return [ref, beenSeen];
};
export const MoniquesTips = () => {
  const [ref, beenSeen] = useOnScreen();
  return (
    <MoniquesTipsContainer>
      <div>
        <header>
          <span style={{ fontWeight: 200 }}>before we have</span>{" "}
          <span style={{ fontWeight: 500 }}>FUN</span>
          ...
        </header>
        <p style={{ marginBottom: "10rem", textAlign: "center" }}>
          Make sure you have everything
        </p>
        <Tips>
          <RightColumn>
            <BallContainer
              ref={ref}
              isVisable={beenSeen}
              // className={`roll-in-section ${beenSeen ? "is-visible" : ""}`}
            >
              <img src={ball} />
            </BallContainer>
            <p>Mo's checkList</p>
            <Row>
              <CheckMark>
                <div id="checkmark_stem"></div>
                <div id="checkmark_kick"></div>
              </CheckMark>
              <div></div>
            </Row>
            <Row>
              <CheckMark>
                <div id="checkmark_stem"></div>
                <div id="checkmark_kick"></div>
              </CheckMark>
              <div></div>
            </Row>

            <Row>
              <CheckMark>
                <div id="checkmark_stem"></div>
                <div id="checkmark_kick"></div>
              </CheckMark>
              <div></div>
            </Row>

            <Row>
              <CheckMark>
                <div id="checkmark_stem"></div>
                <div id="checkmark_kick"></div>
              </CheckMark>
              <div></div>
            </Row>
            <div
              style={{
                display: "flex",
                backgroundColor: "transparent",
                marginBottom: "4rem",
                marginTop: "3rem",
              }}
            >
              <a href="/files/CarnivalList.docx" download>
                Click to download
              </a>
            </div>
          </RightColumn>
        </Tips>
      </div>
    </MoniquesTipsContainer>
  );
};
