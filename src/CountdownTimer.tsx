import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #ff5267;
  font-weight: 800;
  font-size: clamp(0.05em, 0.05em + 3vw, 1.4em);
  align-self: center;
`;
export const CountdownTimer = () => {
  const countDownDate = new Date("June 8 2023").getDate();
  const [countdownResult, setCountdownResult] = useState("");

  setInterval(() => {
    const now = new Date().getTime();
    const distance = Date.parse("June 8 2023") - new Date().getTime();
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setCountdownResult(
      `${days} days ${hours} hrs ${minutes} min ${seconds} secs`
    );
  }, 1000);
  return <Container>{countdownResult}</Container>;
};
