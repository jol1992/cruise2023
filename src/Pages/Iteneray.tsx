import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderText } from "../Components/Header";
import documents from "../images/documents.jpg";
import newOrleans from "../images/neworleans.jpg";
import ship from "../images/ship.jpg";
import { MovingImage } from "../Components/MovingImage";

//on the boat
import party from "../images/ontheBoat/carnival-party2.jpg";
import kids from "../images/ontheBoat/bbg.jpg";
import breakfast from "../images/ontheBoat/breakfast.jpg";
import burgers from "../images/ontheBoat/burgers.jpg";
import monty from "../images/ontheBoat/monty.jpg";
import captain from "../images/ontheBoat/on_boat2.jpg";
import pool from "../images/ontheBoat/on_boat.jpg";
// import party from "../images/ontheBoat/carnival-party2.jpg";

// Mexico
import mexico from "../images/inMexico/mexico1.jpg";
import lexia from "../images/inMexico/lexia_port.jpg";
import port from "../images/inMexico/mexico_port.jpg";
import chocolate from "../images/inMexico/mexico_choclate.jpg";
import mexican from "../images/inMexico/mexican-man.jpg";

//icons
import food from "../assets/icons/png/restaurant.png";
import basketball from "../assets/icons/png/basketball.png";
import cheers from "../assets/icons/png/cheers.png";
import gym from "../assets/icons/png/gym.png";
import laugh from "../assets/icons/png/happy.png";

import mircophone from "../assets/icons/png/microphone.png";
import sauna from "../assets/icons/png/sauna.png";
import slots from "../assets/icons/png/slots.png";
import theatre from "../assets/icons/png/theatre.png";
import dance from "../assets/icons/png/dance.png";
import document from "../assets/icons/png/document.png";

import { useContext, useEffect, useRef, useState } from "react";
import { AppStateContext } from "../Providers/AppStateProvider";

import wave from "../images/wave.svg";
import { Card } from "../Components/Card";

const cards = [
  { description: "Unlimited Food", image: food },
  { description: "Clubs", image: dance },
  { description: "Casino", image: slots },
  { description: "Basketball", image: basketball },
  { description: "Sport Bars", image: cheers },
  { description: "Production Plays", image: theatre },
  { description: "Comedy Shows", image: laugh },
  { description: "Karaoke", image: mircophone },
  { description: "Spa", image: sauna },
  { description: "Gym", image: gym },
];

const IteneraryContainter = styled.div`
  padding: 4rem;
  max-width: 1598px;
  margin: auto;
  img {
    border-radius: 10px;
    max-width: 600px;
    border-top: #334b49 solid 5px;
    border-bottom: #334b49 solid 5px;
  }
  a {
    text-decoration: underline;
    color: blue;
  }

  @media (max-width: 700px) {
    padding: 0;

    img {
      width: 100%;
      border-radius: 0;
    }
    ul {
      width: 100%;
      padding: 1rem;
    }
  }
`;

const HeaderContainer = styled.div`
  // -webkit-text-stroke: #a0ddd8 1px;
`;

const Section = styled.div`
  ul {
    margin-left: 1rem;
  }
`;
const SectionBody = styled.div``;

const Content = styled.div`
  div {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`;

const PageHeader = styled.div`
  background: url(${ship}) no-repeat center fit;
`;

const WeGotcha = styled.div`
  -webkit-text-stroke-color: white;
  @media (max-width: 768px) {
    -webkit-text-stroke-width: 1px;
  }
`;

const PageWrapper = styled.div`
  padding: 4rem 0 0 0;
`;

const ChecklistButton = styled.div`
  background-color: white;
  color: #334b49;
  padding: 1rem 3rem;
  margin: 0;
  border-radius: 10px;
  box-shadow: 7px 9px 8px 0px #3e26268a;
  aligin-items: center;
  display: flex;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const TravelButton = styled.div`
  color: white;
  background-color: #334b49e0;
  margin: auto;
  padding: 1rem 3rem;
  border-radius: 10px;
  background-color: #51beb7;
  box-shadow: 7px 5px 7px #00000073;

  &:hover {
    cursor: pointer;
  }
`;
export const Itenerary = () => {
  const nav = useNavigate();

  const { setPath } = useContext(AppStateContext);

  const handleClick = () => {
    nav("/checklist");
    setPath("/checklist");
  };

  return (
    <PageWrapper>
      <PageHeader>
        <HeaderText size="4" style={{ textAlign: "center" }}>
          Not Sure what to do?
        </HeaderText>
        <WeGotcha>
          <HeaderText size="4" style={{ textAlign: "center" }}>
            <WeGotcha>
              <div style={{ textAlign: "center", color: "#334b49" }}>
                We Gotcha
              </div>
            </WeGotcha>
          </HeaderText>
        </WeGotcha>
      </PageHeader>

      <hr />

      <IteneraryContainter>
        <SectionBody>
          <Section>
            <HeaderContainer style={{ marginBottom: "4rem" }}>
              <HeaderText size="3">Before the Trip</HeaderText>
            </HeaderContainer>
            <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
              <div>
                <img src={newOrleans} />
              </div>
              <Content>
                <div>1. Request time off work</div>
                <div>2. Transportation to New Orleans</div>
                <div>
                  3. Make sure to have Required Documents{" "}
                  <div
                    style={{
                      display: "flex",

                      justifyContent: "center",
                      margin: "1rem 0",
                      padding: "2rem 0",
                    }}
                  >
                    <ChecklistButton onClick={handleClick}>
                      <img
                        src={document}
                        style={{
                          maxWidth: "32px",
                          maxHeight: "32px",
                          border: "0",
                          alignSelf: "center",
                        }}
                      />

                      <div style={{ alignSelf: "center", margin: 0 }}>
                        <strong>
                          View <br /> checklist
                        </strong>
                      </div>
                    </ChecklistButton>
                  </div>
                </div>
                <div>
                  4. Download the{" "}
                  <a href="https://play.google.com/store/apps/details?id=com.carnival.android&pli=1">
                    Carnival Hub
                  </a>{" "}
                  app
                </div>
                <div>5. Get to New Orleans, EARLY</div>
                <div
                  style={{
                    color: "#ffffa8",
                    fontSize: "1rem",
                    marginTop: "1.5rem",
                  }}
                >
                  *PARKING AT THE PORT IS $90 OR $100
                </div>

                {/* Todo: Add Tip note for luggage guys*/}
              </Content>
            </div>
          </Section>
          <hr />
          <div
            style={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            <div style={{ textDecoration: "underline", marginBottom: "4rem" }}>
              <HeaderText size="3">Parking Information:</HeaderText>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13829.883325644058!2d-90.061357!3d29.9371329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x593386ebe000c185!2sPort%20of%20New%20Orleans!5e0!3m2!1sen!2sus!4v1673841081591!5m2!1sen!2sus"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>

          <hr />

          <Section>
            <HeaderContainer style={{ marginBottom: "4rem" }}>
              <HeaderText size="3">On the Boat, Now what?</HeaderText>
            </HeaderContainer>

            <div
              style={{ display: "flex", gap: "3rem", flexWrap: "wrap-reverse" }}
            >
              <div style={{ marginLeft: "auto" }}>
                <MovingImage
                  images={[
                    party,
                    breakfast,
                    captain,
                    monty,
                    burgers,
                    kids,
                    pool,
                  ]}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                margin: "4rem 2rem",
                justifyItems: "center",
              }}
            >
              {cards.map(({ image, description }) => {
                return <Card icon={image} decription={description} />;
              })}
            </div>
          </Section>
          <hr />
          <Section>
            <HeaderContainer style={{ marginBottom: "4rem" }}>
              <HeaderText size="3">Can we do anything in Mexico?</HeaderText>
            </HeaderContainer>
            <div style={{ marginBottom: "2rem" }}>
              Yep! There are paid and free things that you can do
            </div>
            <div
              style={{
                display: "flex",
                gap: "3rem",
                flexWrap: "wrap",
              }}
            >
              <MovingImage
                images={[mexico, mexican, ship, port, lexia, chocolate]}
              />
              <ul>
                <li>Excursions</li>
                <li>Beach</li>
                <li>Sport Bars</li>
                <li>Walk & Shop around the port</li>
              </ul>
            </div>
          </Section>
        </SectionBody>
      </IteneraryContainter>
      <div style={{ backgroundColor: "#334b49", padding: "4rem 0" }}>
        <div style={{ padding: "0" }}>
          <HeaderText style={{ margin: "2rem 0" }}>
            Wanna Explore Mexico?
          </HeaderText>
        </div>
        <div style={{ display: "flex" }}>
          <TravelButton
            onClick={() => {
              window.open("https://www.carnival.com/shore-excursions/cozumel");
            }}
          >
            View Excursions
          </TravelButton>
        </div>
      </div>
    </PageWrapper>
  );
};
