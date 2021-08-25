import DestinationCard from "components/cards/DestinationCard";
import { midText, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";

const HeroSection3 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Category>Top Selling</Category>
          <Service>Top Destinations</Service>
        </TopSection>
        <DestinationCard />
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  margin: 120px 0 0;
`;
const TopSection = styled.div``;
const Category = styled(smallText)`
  color: #5e6282;
  text-align: center;
`;
const Service = styled(midText)`
  color: #14183e;
  text-align: center;
`;
export default HeroSection3;
