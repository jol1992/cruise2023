import { useEffect, useRef } from "react";
import styled from "styled-components";
import { HeaderText } from "../Components/Header";

interface Product {
  link: string;
  imageLink: string;
  name: string;
}

const amazonItems: Product[] = [
  {
    link: "https://www.etsy.com/listing/704502189/cruise-shirts-i-love-it-when-were?variation1=1083129048&favorite_listing_id=704502189",
    imageLink:
      "https://i.etsystatic.com/7271519/r/il/3b8ba8/1869932140/il_794xN.1869932140_qmtn.jpg",
    name: "Tshirt",
  },
  {
    link: "https://amzn.to/3XhWDWJ",
    imageLink: "https://m.media-amazon.com/images/I/71UkX6OBFhL._AC_SX679_.jpg",
    name: "Lanyard- To hold Sign & Sail card",
  },
  {
    link: "https://amzn.to/3WheXxQ",
    imageLink:
      "https://m.media-amazon.com/images/I/71WL-B4QdEL._AC_SL1500_.jpg",
    name: "Luggage Tags",
  },
  {
    link: "https://amzn.to/3GOE1q6",
    imageLink:
      "https://m.media-amazon.com/images/I/81vy-TP+cfL._AC_SL1500_.jpg",
    name: "Lanyard and Luggage tags set",
  },
  {
    link: "https://amzn.to/3ITqxvU",
    imageLink: "https://m.media-amazon.com/images/I/61Jky0CCIQL._AC_SX522_.jpg",
    name: "Neck Fan- Because it will be hot",
  },
  {
    link: "https://amzn.to/3Xj5MOM",
    imageLink: "https://m.media-amazon.com/images/I/614ZWHzOcQL._AC_SX522_.jpg",
    name: "Neck Fan- Because it will be hot",
  },
  {
    link: "https://amzn.to/3QI7WoG",
    imageLink: "https://m.media-amazon.com/images/I/71UQaNlK8rL._AC_SX679_.jpg",
    name: "Medication Organizer   ",
  },
  {
    link: "https://amzn.to/3kp8AeD",
    imageLink:
      "https://m.media-amazon.com/images/I/61RICQERwkS._AC_SL1296_.jpg",
    name: "Waterproof Cell Phone Pouch",
  },
  {
    link: "https://amzn.to/3kpjLnG",
    imageLink:
      "https://m.media-amazon.com/images/I/615fBTEmRFS._AC_UL1500_.jpg",
    name: "Water shoes",
  },
  {
    link: "https://amzn.to/3w9Od7L",
    imageLink:
      "https://m.media-amazon.com/images/I/61U-Z4eTs7L._AC_SL1500_.jpg",
    name: "Charger Port",
  },
  {
    link: "https://amzn.to/3XEYKn1",
    imageLink:
      "https://m.media-amazon.com/images/I/61HnuxozJWL._AC_SL1500_.jpg",
    name: "Tumbler",
  },
  {
    link: "https://amzn.to/3Wjcm6k",
    imageLink:
      "https://m.media-amazon.com/images/I/712EgC798kL._AC_SL1500_.jpg",
    name: "Selfie stick",
  },
];

const MerchContainer = styled.div`
  padding: 0 2rem;
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Item = styled.div`
  width: 200px;
  background-color: "white";
  min-height: 190px;
  padding: 2rem;
`;

const ImageWrapper = styled.div`
  width: 200px;

  display: flex;
  min-height: 190px;
  // alignContent: "center",
`;

export const Merch = () => {
  return (
    <MerchContainer>
      <div style={{ margin: "4rem 0", textAlign: "center" }}>
        <HeaderText style={{ color: "white" }}> Merch</HeaderText>
        <div style={{ color: "#ffe495" }}>Need Something? Here it is!</div>
      </div>

      <ItemsWrapper>
        {amazonItems.map((item) => (
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "5px",
              }}
            >
              <div style={{ padding: "1rem 0", textAlign: "center" }}>
                {item.name}
              </div>
              <Item onClick={() => window.open(`${item.link}`)}>
                <ImageWrapper>
                  <img
                    src={item.imageLink}
                    style={{
                      width: "100%",
                      margin: "auto",
                    }}
                  />
                </ImageWrapper>
              </Item>
            </div>
          </div>
        ))}
      </ItemsWrapper>
    </MerchContainer>
  );
};
