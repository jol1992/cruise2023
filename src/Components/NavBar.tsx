import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  }
  li {
    decoration: none;
  }
`;
export const NavBar = () => {
  const nav = useNavigate();
  return (
    <NavBarContainer>
      <ul>
        <li onClick={() => nav("/cruise2023")}>Home</li>
        <li onClick={() => nav("/itenerary")}>Itenerary</li>
        <li onClick={() => nav("/checklist")}>Checklist</li>
        <li onClick={() => nav("/rules")}>Rules</li>
      </ul>
    </NavBarContainer>
  );
};
