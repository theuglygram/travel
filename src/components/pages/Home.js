import Herosection1 from "components/HomeContent/Herosection1";
import HeroSection2 from "components/HomeContent/HeroSection2";
import HeroSection3 from "components/HomeContent/HeroSection3";
import HeroSection4 from "components/HomeContent/HeroSection4";
import HeroSection5 from "components/HomeContent/HeroSection5";
import LogosSection from "components/HomeContent/LogosSection";
import SubscriptionSection from "components/HomeContent/SubscriptionSection";
import React, { useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  useEffect(() => {
    document.title = "Travel | Home";
  });
  return (
    <Wrapper>
      <Herosection1 />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <LogosSection />
      <SubscriptionSection />
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default Home;
