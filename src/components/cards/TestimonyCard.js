import { smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import Image from "../assets/images/Image.png";
const TestimonyCard = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <Img src={Image} />
        <Description>
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </Description>
        <Name>Mike taylor</Name>
        <Location>Lahore, Pakistan</Location>
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 504px;

  background: #ffffff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  border-radius: 10px;
  padding: 100px 40px 20px;
  margin: 0 0 95px;
`;
const Img = styled.img`
  position: absolute;
    top: 15%;
    left: -3%;
    width: 68px;
height: 68px;
}
`;
const Description = styled(smallText)`
  font-weight: 600;
  text-align: justify;
  margin: 0 0 20px;
`;
const Name = styled(smallText)`
  font-weight: 600;

  margin: 0 0 5px;
`;
const Location = styled.div``;

export default TestimonyCard;
