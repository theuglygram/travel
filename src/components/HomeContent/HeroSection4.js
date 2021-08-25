import { mediumText, midText, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import destinationIcon from "../assets/icons/destinationIcon.svg";
import paymentIcon from "../assets/icons/paymentIcon.svg";
import beachIcon from "../assets/icons/beachIcon.svg";
import BookingCard from "components/cards/BookingCard";
const HeroSection4 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <LeftSection>
          <Ease>Easy and Fast</Ease>
          <Book>Book your next trip in 3 easy steps</Book>
          <DestinationHolder>
            <Dest>
              <DestinationImg src={destinationIcon} />

              <Join>
                {" "}
                <Title>Choose Destination</Title>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </Description>
              </Join>
            </Dest>
          </DestinationHolder>
          <DestinationHolder>
            <Dest>
              <DestinationImg src={paymentIcon} />

              <Join>
                {" "}
                <Title>Make Payment</Title>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </Description>
              </Join>
            </Dest>
          </DestinationHolder>
          <DestinationHolder>
            <Dest>
              <DestinationImg src={beachIcon} />

              <Join>
                {" "}
                <Title>Reach Airport on Selected Date</Title>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </Description>
              </Join>
            </Dest>
          </DestinationHolder>
        </LeftSection>
        <RightSection>
          <BookingCard />
        </RightSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  width: 100%;
  max-width: 1102px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 100px auto;
  padding: 0 20px;

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    place-items: center;
    justify-items: center;
    align-items: center;
  }
`;
const LeftSection = styled.div`
  max-width: 510px;
  width: 100%;
  margin: 50px 0;
`;
const Ease = styled(smallText)`
  color: #5e6282;
`;
const Book = styled(midText)`
  color: #14183e;
  text-transform: capitalize;
`;
const DestinationHolder = styled.div`
  margin: 30px 0 0;
`;
const DestinationImg = styled.img`
  margin-right: 30px;
`;
const Join = styled.div``;
const Dest = styled.div`
  display: flex;
`;
const Title = styled(smallText)`
  color: #14183e;
`;
const Description = styled(mediumText)`
  color: #5e6282;
`;
const RightSection = styled.div`
  margin: 50px 0;
`;
export default HeroSection4;
