import { mediumText, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import mastIcon from "../assets/icons/mastIcon.svg";
import planeIcon from "../assets/icons/planeIcon.svg";
import micIcon from "../assets/icons/micIcon.svg";
import powerIcon from "../assets/icons/powerIcon.svg";

const ServicesCard = () => {
  return (
    <Wrapper>
      <CardWrap>
        <CardHolder>
          <Img src={mastIcon} />
          <Desc>Calculated Weather </Desc>
          <Description>
            Built Wicket longer admire do barton vanity itself do in it.
          </Description>
        </CardHolder>
        <CardHolder>
          <Img src={planeIcon} />
          <Desc>Best Flights </Desc>
          <Description>
            Engrossed listening. Park gate sell they west hard for the.
          </Description>
        </CardHolder>
        <CardHolder>
          <Img src={micIcon} />
          <Desc>Local Events </Desc>
          <Description>
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </Description>
        </CardHolder>
        <CardHolder>
          <Img src={powerIcon} />
          <Desc>Customization</Desc>
          <Description>
            We deliver outsourced aviation services for military customers
          </Description>
        </CardHolder>
      </CardWrap>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const CardWrap = styled.div`
  max-width: 1182px;
  width: 100%;
  margin: 65px auto 120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    justify-items: center;
    align-items: center;
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    justify-items: center;
    align-items: center;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CardHolder = styled.div`
  height: 314px;
  width: 267px;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  transition: 0.2s ease all;

  :hover {
    background: #ffffff;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
      0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
      0px 20px 13px rgba(0, 0, 0, 0.01),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    border-radius: 36px;
  }
`;
const Img = styled.img`
  margin: 0 0 30px;
  width: 92px;
  height: 78px; ;
`;
const Desc = styled(smallText)`
  color: #1e1d4c;
  text-align: center;
  margin: 0 0 15px;
`;
const Description = styled(mediumText)`
  color: #5e6282;
  text-align: center;
`;
export default ServicesCard;
