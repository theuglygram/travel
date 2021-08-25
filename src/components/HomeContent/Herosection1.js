import React from "react";
import styled from "styled-components";
import Traveller from "../assets/images/Traveller.svg";
import paleBackground from "../assets/images/paleBackground.svg";
import Navbar from "components/navigation/Navbar";
import {
  btn,
  largeText,
  mediumText,
  smallText,
} from "components/styles/GlobalStyles";
import playBtn from "../assets/icons/playBtn.svg";
const Herosection1 = () => {
  return (
    <Wrapper>
      <Back />
      <Nav>
        <Navbar />
      </Nav>

      <ContentWrapper>
        <LeftSection>
          <Destination>Best Destinations around the world</Destination>
          <Travel>Travel, enjoy and live a new and full life</Travel>
          <Description>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </Description>
          <ButtonWrapper>
            <Btn1>Find out More</Btn1>
            <Btn2>
              <PlayIcon src={playBtn} />
              Play More
            </Btn2>
          </ButtonWrapper>
        </LeftSection>
        <RightSection>
          <Girl src={Traveller} />
        </RightSection>
      </ContentWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;
const Nav = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1182px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const Back = styled.div`
  background-image: url(${paleBackground});
  background-repeat: no-repeat;
  background-position: right 0 top 0;
  background-size: 60%;

  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  left: 0;
  z-index: -1;
`;
const LeftSection = styled.div`
  margin: 120px 0 0 0;
  max-width: 560px;
  width: 100%;
  padding: 0 24px;
`;
const RightSection = styled.div`
  margin: 120px 0 0 0;
  max-width: 700px;
  width: 100%;
`;
const Destination = styled(mediumText)`
  color: #df6951;
  margin: 0 0 24px;
`;
const Travel = styled(largeText)`
  color: #181e4b;
  margin: 0 0 30px;
`;
const Description = styled(smallText)`
  color: #5e6282;
`;
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  height: 60px;
  max-width: 379px;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const Btn1 = styled(btn)`
  background: #f1a501;
  color: #fff;
  margin: 20px 0 0 0;
`;
const Btn2 = styled(btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  box-shadow: none;
  margin: 20px 0 0 0;
`;
const PlayIcon = styled.img`
  margin: 32px 0 0 -30px;
`;
const Girl = styled.img`
  /* margin: 96px 0 0 0; */
  max-width: 700px;
  width: 100%;
`;
export default Herosection1;
