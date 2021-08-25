import React from "react";
import styled from "styled-components";
import map from "../assets/icons/map.svg";
import leaf from "../assets/icons/leaf.svg";
import send from "../assets/icons/send.svg";
import city from "../assets/icons/city.svg";
import greece from "../assets/images/greece.png";
const BookingCard = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <TopSection>
          <GreeceImg src={greece} />
        </TopSection>
        <BottomSection>
          <Trip>Trip To Greece</Trip>
          <Date> 14-29 June | by Robbin joseph</Date>
          <IconsHolder>
            <Icons src={leaf} />
            <Icons src={map} />
            <Icons src={send} />
          </IconsHolder>
          <Going>24 people going</Going>
        </BottomSection>
        <FloatingDiv>
          <Img src={city} />
          <OngoingWrap>
            <Ongoing>Ongoing</Ongoing>
            <RomeTrip>Trip to rome</RomeTrip>
            <Percent>
              <Txt>40%</Txt> Completed
            </Percent>
            <Bar>
              <Progress></Progress>
            </Bar>
          </OngoingWrap>
        </FloatingDiv>
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const CardWrapper = styled.div`
  width: 370px;
  height: 400px;
  background: #ffffff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  border-radius: 26px;
  padding: 20px 30px;
  position: relative;
  @media only screen and (max-width: 400px) {
    width: 300px;
  }
`;

const TopSection = styled.div``;
const GreeceImg = styled.img`
  width: 321px;
  height: 161px;
  @media only screen and (max-width: 400px) {
    width: 235px;
  }
`;
const BottomSection = styled.div``;
const Trip = styled.div`
  font-weight: 600;
  margin: 15px 0;
`;
const Date = styled.div``;
const IconsHolder = styled.div``;
const Icons = styled.img``;
const Going = styled.div`
  margin: 20px 0;
`;
const FloatingDiv = styled.div`
  position: absolute;
  width: 263px;
  height: 129px;
  background: #ffffff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  border-radius: 18px;
  top: 60%;
  left: 50%;
  display: flex;
  padding: 10px;
  @media only screen and (max-width: 520px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;
const OngoingWrap = styled.div``;
const Ongoing = styled.div``;
const RomeTrip = styled.div`
  font-weight: 600;
  margin: 10px 0;
`;
const Percent = styled.div`
  display: flex;
  margin: 0 0 5px;
`;
const Txt = styled.div`
  color: #8a79df;
`;
const Bar = styled.div`
  background: #f5f5f5;
  height: 2px;
  width: 100%;
`;
const Progress = styled.div`
  background: #8a79df;
  height: 2px;
  width: 30%;
`;
export default BookingCard;
