import React from "react";
import { Person, PersonProps } from "./Person";
import background from "./images/background.png";
import maurece from "./images/people/maurece.jpg";
import andrew from "./images/people/andrew.jpg";
import monique from "./images/people/monique.jpg";
import nicole from "./images/people/Nicole.jpg";
import bianca from "./images/people/bianca.jpg";
import rere from "./images/people/Rere.jpg";
import wilma from "./images/people/wilma.jpg";
import gloria from "./images/people/Gloria.jpg";
import justin from "./images/people/justin.jpg";
import jacolbi from "./images/people/Jacolbi.jpg";
import amari from "./images/people/Amari.jpg";
import lexia from "./images/people/lexia.jpg";
import monty from "./images/people/monty.jpg";
import nell from "./images/people/Nell.jpg";

import styled from "styled-components";

export const People = () => {
  const PeopleContainer = styled.div`
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 40px;
    margin: auto;
    padding: 1em;
    align-self: center;
    max-width: 1200px;
    @media (max-width: 768px) {
      margin: 2rem 0;
      padding: 0;
    }
  `;
  const personObject: PersonProps[] = [
    { name: "Justin", image: justin },
    { name: "Monique", image: monique },
    { name: "Gloria", image: gloria },
    { name: "ReRe", image: rere },
    { name: "Maurece", image: maurece },
    { name: "JaColbi", image: jacolbi },

    { name: "Nell", image: nell },
    { name: "Wilma", image: wilma },
    { name: "Monty", image: monty },
    { name: "Lexia", image: lexia },
    { name: "Amari", image: amari },
    { name: "Bianca", image: bianca },
  ];
  return (
    <PeopleContainer>
      {personObject.map((person) => (
        <Person image={person.image} name={person.name} />
      ))}
    </PeopleContainer>
  );
};
