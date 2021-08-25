import { smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import romeItaly from "../assets/images/romeItaly.png";
import londonUk from "../assets/images/londonUk.png";
import fullEurope from "../assets/images/fullEurope.png";
import Navigation from "../assets/images/Navigation.svg";

const DestinationCard = () => {
  return (
    <Wrapper>
      <CardWrap>
        <CardHolder>
          <ImgContent src={romeItaly} />
          <TextHolder>
            <DescText>
              <Rm>Rome, Italy</Rm>
              <Cost>$5,42k</Cost>
            </DescText>
            <Trip>
              <NavIcon src={Navigation} />
              10 days trip
            </Trip>
          </TextHolder>
        </CardHolder>
        <CardHolder>
          <ImgContent src={londonUk} />
          <TextHolder>
            <DescText>
              <Rm>London, Uk</Rm>
              <Cost>$4.2k</Cost>
            </DescText>
            <Trip>
              <NavIcon src={Navigation} />
              12 days trip
            </Trip>
          </TextHolder>
        </CardHolder>
        <CardHolder>
          <ImgContent src={fullEurope} />
          <TextHolder>
            <DescText>
              <Rm>Full Europe</Rm>
              <Cost>$15k</Cost>
            </DescText>
            <Trip>
              <NavIcon src={Navigation} />
              28 days trip
            </Trip>
          </TextHolder>
        </CardHolder>
      </CardWrap>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const CardWrap = styled.div`
  max-width: 1102px;
  width: 100%;
  margin: 60px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const CardHolder = styled.div`display: flex;
    align-items: flex-end;
    filter: drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481));
border-radius: 24px;
}
margin: 20px 0`;
const TextHolder = styled.div`
  position: absolute;
  width: 315px;
  height: 130px;
  background: #ffffff;
  border-radius: 0px 0px 24px 24px;
  padding: 20px;
`;
const ImgContent = styled.img`
  width: 314px;
  height: 457px;
`;
const DescText = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Rm = styled(smallText)``;
const Cost = styled(smallText)``;
const Trip = styled.div`
  margin: 25px 0 0;
`;
const NavIcon = styled.img`
  margin-right: 20px;
`;
export default DestinationCard;
