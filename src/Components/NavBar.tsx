import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MenuButton } from "./MenuButton";
import { AppStateContext } from "../Providers/AppStateProvider";
import logo from "../images/sampleLogo2.png";

const NavBarContainer = styled.div`
  position: sticky;
  background-color: #334b49;
  color: white;
  top: 0;
  z-index: 2;
  box-shadow: 0px 5px 7px 0px black;
  ul {
    display: flex;
    list-style: none;
    gap: 4rem;
    margin-left: auto;
    justify-content: center;
    padding: 0.3rem;
  }
  li {
    decoration: none;
    img {
      max-width: 100px;
    }

    &:hover {
      color: #ffe495;
      cursor: pointer;
      font-weight: 500;
    }

    #joinUs {
      background-color: white;
      color: #334b49;
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
    }
    #joinUs {
      background-color: white;
      color: #334b49;
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: center;
    }
  }
`;

export const NavBar = () => {
  const nav = useNavigate();

  const { setPath } = useContext(AppStateContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 768)
    );
  });

  const handleClick = (path: string) => {
    setPath(path);
    setIsOpen(false);
    nav(path);
  };

  return (
    <NavBarContainer>
      {isOpen || !isMobile ? (
        <ul>
          <li onClick={() => handleClick("/cruise2023")}>Home</li>
          <li onClick={() => handleClick("/itenerary")}>Itinerary</li>
          <li onClick={() => handleClick("/checklist")}>Checklist</li>
          <li onClick={() => handleClick("/merch")}>Merch</li>
          <li
            id="joinUs"
            onClick={() =>
              window.open(
                `https://www.carnival.com/booking/rooms-and-guests?embkCode=MSY&itinCode=WCD&durDays=4&shipCode=VA&subRegionCode=CW&sailDate=06082023&sailingID=96338&numGuests=2&isMilitary=N&isOver55=N&isPastGuest=N&stateCode=&evsel=&locality=1&currency=USD`
              )
            }
          >
            Join Us / Book Now!
          </li>
        </ul>
      ) : (
        <ul style={{ width: "100%", marginLeft: "1rem" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignContent: "center",
            }}
          >
            <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <li
              onClick={() => handleClick("/cruise2023")}
              style={{ margin: "auto" }}
            >
              <img src={logo} />
            </li>
          </div>
        </ul>
      )}
    </NavBarContainer>
  );
};
