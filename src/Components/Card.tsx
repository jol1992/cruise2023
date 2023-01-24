import styled from "styled-components";

const CardContainer = styled.div`
  padding: 2rem 3rem;
  background-color: white;
  border-radius: 5px;
  color: #334b49;
  width: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: -5px 16px 20px #3d4648;

  img {
    border: 0;
    max-width: 32px;
    max-height: 32px;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Card: React.FC<{ icon: string; decription: string }> = ({
  icon,
  decription,
}) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <img src={icon} style={{ border: "0" }} />
      </ImageWrapper>
      <div>{decription}</div>
    </CardContainer>
  );
};
