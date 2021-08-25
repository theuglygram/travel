import React from "react";
import styled from "styled-components";
import aiitalia from "../assets/logos/aiitalia.svg";
import axon from "../assets/logos/axon.svg";
import expedia from "../assets/logos/expedia.svg";
import jetstar from "../assets/logos/jetstar.svg";
import qantas from "../assets/logos/qantas.svg";

const LogosSection = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <Logos src={aiitalia} />
        <Logos src={axon} />
        <Logos src={expedia} />
        <Logos src={jetstar} />
        <Logos src={qantas} />
      </SectionWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  height: 162px;
  max-width: 1073px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 390px) {
    grid-template-columns: 1fr;
  }
`;
const Logos = styled.img``;
export default LogosSection;
