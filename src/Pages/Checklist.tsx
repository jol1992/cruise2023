import styled from "styled-components";
import { HeaderText } from "../Components/Header";
import checklistImage from "../images/checklist.jpg";
import boat from "../images/CarnivalBoat.jpg";
import { ChecklistItem } from "../Components/CheckListItem";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { AppStateContext } from "../Providers/AppStateProvider";
import { MovingImage } from "../Components/MovingImage";

const HeroDiv = styled.div`
  max-width: 100%;
  margin-bottom: 4rem;
  img {
    width: 100%;
  }
`;

const MerchButton = styled.div`
  color: white;
  background-color: #334b49e0;
  margin: auto;
  padding: 1rem 3rem;
  border-radius: 10px;
  background-color: #51beb7;
  box-shadow: -7px 14px 13px 9px #00000073;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  &:hover {
    cursor: pointer;
  }
`;

export const Checklist = () => {
  const nav = useNavigate();
  const { setPath } = useContext(AppStateContext);
  const handleClick = () => {
    nav("/merch");
    setPath("/merch");
  };

  return (
    <div>
      <HeroDiv>
        <img src={boat} />
      </HeroDiv>

      <div style={{ padding: "0 1rem" }}>
        <HeaderText size="3" style={{ textAlign: "center", color: "white" }}>
          Required Documents
        </HeaderText>
        <div
          style={{
            textAlign: "center",
            color: "yellow",
            marginBottom: "2rem",
            fontSize: "0.8rem",
          }}
        >
          <div>HAVE THESE ITEMS IN HAND!</div>
          <div>
            <strong>DO NOT PACK </strong>IN YOUR BAGS!!
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <ChecklistItem
            label={
              <>
                CLEAR READABLE <strong>BIRTH CERTIFICATE</strong> (Original or
                Copy) OR <strong>PASSPORT</strong>
              </>
            }
          />

          <ChecklistItem
            label={
              <>
                <strong>PHOTO ID </strong> (make sure it's not EXPIRED)
              </>
            }
          />

          <ChecklistItem
            label={
              <>
                <strong>DEBIT CARD</strong> or <strong>CASH</strong> to add to
                account for purchases
              </>
            }
          />
          <ChecklistItem
            label={
              <>
                <strong>BORDING DOCUMENTS</strong>
              </>
            }
          />
        </div>

        <HeaderText
          size="3"
          style={{ textAlign: "center", color: "white", marginBottom: "4rem" }}
        >
          WHAT CAN I BRING?
        </HeaderText>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#ffe495" }}>Luggage</h3>
          <div style={{ marginBottom: "2rem" }}>
            <strong>Make sure your luggae is allowed</strong>
          </div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/RG4zzODWzus"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>

        <h3 style={{ color: "#ffe495" }}>WHAT TO WEAR?</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <ChecklistItem label={"Causal clothes"} />
          <ChecklistItem label={"Swimsuits/Watershoes"} />
          <ChecklistItem
            label={"1 pair of Elegant clothing for Captain's Dinner"}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <h3 style={{ color: "#ffe495" }}>WHAT TO BRING</h3>
          <div
            style={{
              color: "yellow",
              fontSize: "0.6rem",
              marginTop: "6px",
            }}
          >
            {" "}
            *optional
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <ChecklistItem
            label={"Small dollar bills - $1 to tip service workers"}
          />
          <ChecklistItem label={"Sunscreen"} />
          <ChecklistItem label={"Medication"} />
          <ChecklistItem label={"Dramamine (For seasickness)"} />
          <ChecklistItem label={"Tumbler"} />
          <ChecklistItem label={"Light jacket"} />
          <ChecklistItem label={"Soda Packets"} />
          <ChecklistItem label={"Hat"} />
          <ChecklistItem label={"Sunglasses"} />
          <ChecklistItem label={"Neck fan (It's gonna be HOT!)"} />
          <ChecklistItem label={"Soda - One case of 12 (CANS ONLY)"} />
          <ChecklistItem label={"Wine - One 750ml bottle per adult"} />
          <ChecklistItem label={"Cigerettes- You can smoke in the casino"} />
        </div>
        <br />

        <h3 style={{ color: "#ffe495" }}>WHAT NOT TO BRING!</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div>DRUGS (THEY DO SECURITY CHECKS)</div>
          <div>WEAPONS</div>
          <div>PLAYSTATION/XBOX</div>
          <div>NO BOTTLES OF WATER OR DRINKS</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#334b49", padding: "4rem 0 0 0" }}>
        <div style={{ padding: "0" }}>
          <HeaderText style={{ margin: "2rem" }}>
            Need to buy something?
          </HeaderText>

          <div
            style={{
              position: "relative",
            }}
          >
            <MovingImage
              images={[
                "https://i.etsystatic.com/28657327/r/il/944878/3641971908/il_794xN.3641971908_pdxr.jpg",
                "https://m.media-amazon.com/images/I/71WL-B4QdEL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61Jky0CCIQL._AC_SX522_.jpg",
              ]}
            />
            <MerchButton onClick={handleClick}>
              <strong>View Merch</strong>
            </MerchButton>
          </div>
        </div>
        <div style={{ display: "flex" }}></div>
      </div>
    </div>
  );
};
