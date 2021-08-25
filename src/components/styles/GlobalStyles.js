import styled from "styled-components";

export const smallText = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
`;
export const mediumText = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
`;

export const largeText = styled.p`
  font-family: Volkhov-Bold;
  font-size: 84px;
  font-style: normal;
  font-weight: 700;
  line-height: 89px;
  @media only screen and (max-width: 950px) {
    font-size: 35px;
    line-height: 1.5;
  }
`;
export const midText = styled.p`
  font-family: Volkhov-Bold;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
  letter-spacing: 0em;
  @media only screen and (max-width: 950px) {
    font-size: 35px;
    line-height: 1.5;
  }
`;

export const btn = styled.button`
  border: none;
  outline: none;
  font-family: GoogleSans-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  width: 170px;
  height: 60px;
  box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
