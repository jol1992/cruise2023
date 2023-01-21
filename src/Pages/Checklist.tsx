import styled from "styled-components";
import { HeaderText } from "../Components/Header";
import checklistImage from "../images/checklist.jpg";
import boat from "../images/CarnivalBoat.jpg";
import { ChecklistItem } from "../Components/CheckListItem";
import { useEffect, useRef } from "react";

const HeroDiv = styled.div`
  max-width: 100%;
  margin-bottom: 4rem;
  img {
    width: 100%;
  }
`;

export const Checklist = () => {
  const ref = useRef({} as HTMLDivElement);

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
            {" "}
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

        <h3 style={{ color: "#ffe495" }}>WHAT TO WEAR?</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <ChecklistItem label={"Causal clothes"} />
          <ChecklistItem label={"Swimsuits/Watershoes"} />
          <ChecklistItem
            label={"1 pair of Elegant clothing for Captain's Dinner"}
          />
        </div>
        <HeaderText size="3" style={{ textAlign: "center", color: "white" }}>
          WHAT CAN I BRING?
        </HeaderText>
        <div
          style={{
            textAlign: "center",
            color: "yellow",
            marginBottom: "2rem",
            fontSize: "0.8rem",
          }}
        >
          {" "}
          *optional
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
          <ChecklistItem label={"Soda - One case of 12 cans per guest"} />
          <ChecklistItem label={"Wine - One 750ml bottle per adult"} />
        </div>
        <br />
        <div>
          THEY HAVE CERTAIN AREAS ON THE BOAT TO SMOKE CIGARETTES/CIGARS...ex
          (Casino)
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
    </div>
  );
};
