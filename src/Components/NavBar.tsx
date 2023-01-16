import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MenuButton } from "./MenuButton";

const NavBarContainer = styled.div`
  position: sticky;
  background-color: white;
  color: #334b49;
  top: 0;
  z-index: 2;
  ul {
    display: flex;
    list-style: none;
    gap: 4rem;
    margin-left: auto;
    justify-content: center;
    padding: 1rem;
  }
  li {
    decoration: none;
  }
  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const NavBar = () => {
  const nav = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 768)
    );
  });

  const handleClick = (path: string) => {
    setIsOpen(false);
    nav(path);
  };

  return (
    <NavBarContainer>
      {isMobile && <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen || !isMobile ? (
        <ul>
          <li onClick={() => handleClick("/cruise2023")}>Home</li>
          <li onClick={() => handleClick("/itenerary")}>Itenerary</li>
          <li onClick={() => handleClick("/checklist")}>Checklist</li>
          <li onClick={() => handleClick("/rules")}>Rules</li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.carnival.com/booking/rooms-and-guests?embkCode=MSY&itinCode=WCD&durDays=4&shipCode=VA&subRegionCode=CW&sailDate=06082023&sailingID=96338&numGuests=2&isMilitary=N&isOver55=N&isPastGuest=N&stateCode=&evsel=&locality=1&currency=USD"
            >
              Join Us / Book Now!
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          <li onClick={() => handleClick("/cruise2023")}>Cruise 2023</li>
        </ul>
      )}
    </NavBarContainer>
  );
};
