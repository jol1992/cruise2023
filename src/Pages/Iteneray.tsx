import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HeaderText } from "../Components/Header";
import documents from "../images/documents.jpg";
import newOrleans from "../images/neworleans.jpg";
import party from "../images/carnival-party2.jpg";
import mexico from "../images/mexico1.jpg";

const IteneraryContainter = styled.div`
  padding-top: 4rem;
  padding: 4rem;
  font-size: 1.5rem;
  max-width: 1598px;
  margin: auto;
  img {
    border-radius: 10px;
    max-width: 600px;
    border-top: white solid 5px;
    border-bottom: white solid 5px;
  }
  a {
    text-decoration: underline;
    color: blue;
  }

  @media (max-width: 700px) {
    padding: 0;
    text-align: center;
    img {
      width: 100%;
      border-radius: 0;
    }
    ul {
      width: 100%;
    }
  }
`;

const HeaderContainer = styled.div`
  -webkit-text-stroke: #a0ddd8 1px;
`;

const Section = styled.div`
  margin-bottom: 8rem;
`;
const SectionBody = styled.div`
  margin-top: 8rem;
`;

const Content = styled.div`
  div {
    margin-bottom: 1rem;
  }
`;

export const Itenerary = () => {
  const nav = useNavigate();
  return (
    <IteneraryContainter>
      <div style={{ marginTop: "4rem" }}>
        <HeaderText size="5" style={{ textAlign: "center" }}>
          Not Sure what to do?
        </HeaderText>

        <HeaderText style={{ textAlign: "center", color: "white" }}>
          We Gotcha
        </HeaderText>
      </div>

      <SectionBody>
        <Section>
          <HeaderContainer style={{ marginBottom: "4rem" }}>
            <HeaderText size="2">Before the Trip</HeaderText>
          </HeaderContainer>
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            <div>
              <img src={newOrleans} />
            </div>
            <Content>
              <div>1. Request time off work</div>
              <div>2. Transportation to New Orleans</div>
              <div>
                3. Make sure to have required documents.{" "}
                <a onClick={() => nav("/checklist")}>View checklist</a>
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
            </Content>
          </div>
        </Section>

        <div
          style={{ margin: "auto", marginBottom: "4rem", textAlign: "center" }}
        >
          <div style={{ marginBottom: "4rem", textDecoration: "underline" }}>
            <HeaderText size="2">Parking Location:</HeaderText>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13829.883325644058!2d-90.061357!3d29.9371329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x593386ebe000c185!2sPort%20of%20New%20Orleans!5e0!3m2!1sen!2sus!4v1673841081591!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        <Section>
          <HeaderContainer style={{ marginBottom: "4rem" }}>
            <HeaderText size="2">On the Boat, Now what?</HeaderText>
          </HeaderContainer>

          <div
            style={{ display: "flex", gap: "3rem", flexWrap: "wrap-reverse" }}
          >
            <ul>
              {/* <div style={{ overflowWrap: "break-word", marginBottom: "2rem" }}>
                It's impossible to be bored on Carnival Valor, here's a taste of
                what's available
              </div> */}
              <li>Unlimited Food</li>
              <li>Clubs</li>
              <li>Casino</li>
              <li>Basketball</li>
              <li>Sport Bars</li>
              <li>Production Plays</li>
              <li>Comedy Shows</li>
              <li>Karaoke</li>
              <li>Spa</li>
              <li>Gym</li>
              <li>... alot more!</li>
            </ul>
            <div style={{ marginLeft: "auto" }}>
              <img src={party} />
            </div>
          </div>
        </Section>
        <Section>
          <HeaderContainer style={{ marginBottom: "4rem" }}>
            <HeaderText size="2">Can we do anything in Mexico?</HeaderText>
          </HeaderContainer>
          <div style={{ marginBottom: "2rem" }}>
            Yep! There are paid and free things that you can do
          </div>
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            <img src={mexico} />
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
  );
};
