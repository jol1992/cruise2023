import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AlternatingColorText } from "./Header/Header";
import "./App.css";

export interface PersonProps {
  name: string;
  image: string;
}

const PersonContainer = styled.div`
  border: white solid;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: clamp(1rem, 1rem + 5vw, 2rem);
  border-radius: 10px;
  img {
    width: clamp(75px, 75px + 10vw, 200px);
    height: clamp(75px, 75px + 10vw, 200px);
    object-fit: cover;
    border-radius: 10px;
  }
  div {
    background-color: white;
    width: 100%;
    color: #334b49;
    font-family: "Inspiration";
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
export const Person: React.FC<PersonProps> = ({ name, image }) => {
  const [ref, beenSeen] = useOnScreen();

  return (
    <PersonContainer
      ref={ref}
      className={`fade-in-section ${beenSeen ? "is-visible" : ""}`}
    >
      <img src={image} />
      <div>{name}</div>
    </PersonContainer>
  );
};
