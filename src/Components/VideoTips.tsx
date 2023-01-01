import { FC } from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  margin-bottom: 2em;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div<{ img: string }>`
  height: 4rem;
  width: 4rem;
  border-radius: 10px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;
  background-position: center;
  margin-right: 4rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const VideoTips: FC<{ video: string; image: string; name: string }> = ({
  name,
  image,
  video,
}) => {
  return (
    <div id="videoDiv">
      <Title>
        <Image img={image} />
        <div>{name}'s tips</div>
      </Title>
      <div>
        <iframe
          style={{ border: "solid white 5px" }}
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};
