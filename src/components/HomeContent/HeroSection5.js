import TestimonyCard from "components/cards/TestimonyCard";
import { midText, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
const HeroSection5 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <LeftSection>
          <Test>Testimonials</Test>
          <Title>What people say about Us.</Title>
        </LeftSection>
        <RightSection>
          <TestimonyCard />{" "}
        </RightSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  max-width: 1182px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  max-width: 409px;
  width: 100%;
`;
const Test = styled(smallText)``;
const Title = styled(midText)``;
const RightSection = styled.div``;
export default HeroSection5;
