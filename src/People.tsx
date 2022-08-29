import React from "react";
import { Person, PersonProps } from "./Person";
import background from "./images/background.png";
import maurece from "./images/maurece.jpg";
import andrew from "./images/andrew.jpg";
import monique from "./images/monique.jpg";
import nicole from "./images/Nicole.jpg";
import bianca from "./images/bianca.jpg";
import rere from "./images/Rere.jpg";
import wilma from "./images/wilma.jpg";
import gloria from "./images/Gloria.jpg";
import justin from "./images/justin.jpg";
import jacolbi from "./images/Jacolbi.jpg";
import amari from "./images/Amari.jpg";
import lexia from "./images/lexia.jpg";
import monty from "./images/monty.jpg";

import styled from "styled-components";

export const People = () => {
  const PeopleContainer = styled.div`
    display: flex;
    gap: 3em;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 45em;
    padding: 1em;
    align-self: center;
  `;
  const personObject: PersonProps[] = [
    { name: "Justin", image: justin },
    { name: "Monique", image: monique },
    { name: "Gloria", image: gloria },
    { name: "ReRe", image: rere },
    { name: "Maurece", image: maurece },
    { name: "JaColbi", image: jacolbi },
    { name: "Andrew", image: andrew },
    { name: "Nell", image: background },
    { name: "Wilma", image: wilma },
    { name: "Monty", image: monty },
    { name: "Lexia", image: lexia },
    { name: "Amari", image: amari },
    { name: "Bianca", image: bianca },
    { name: "Nicole", image: nicole },
  ];
  return (
    <PeopleContainer>
      {personObject.map((person) => (
        <Person image={person.image} name={person.name} />
      ))}
    </PeopleContainer>
  );
};
