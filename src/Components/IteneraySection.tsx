import { HeaderText } from "./Header";

export const ItenerarySection: React.FC<{ image: string }> = ({ image }) => {
  return (
    <>
      <HeaderText size="2">Before the Trip</HeaderText>
      <div style={{ display: "flex", gap: "3rem" }}>
        <div>
          <img src={image} style={{ maxWidth: "600px" }} />
        </div>
        <div>
          <div>1. Request time off work</div>
          <div>2. Transportation to New Orleans</div>
          <div>3. Make sure to have required documents....See checklist</div>
          <div>4. Download the app on your phone</div>
          <div>5. Get to New Orleans, EARLY</div>
          <div>PARKING AT THE PORT $90 OR $100</div>
        </div>
      </div>
    </>
  );
};
