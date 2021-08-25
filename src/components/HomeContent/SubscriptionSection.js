import { btn, mediumText } from "components/styles/GlobalStyles";
import React, { useState } from "react";
import styled from "styled-components";
import email from "../assets/icons/email.svg";
const SubscriptionSection = () => {
  // CONTROLLED INPUT
  const initial = {
    message: "",
    email: "",
  };
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setForm(initial);
  };

  const { message } = form;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Wrapper>
      <SectionWrapper>
        <SectionContent>
          <Sub>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </Sub>
          <Newsletter onSubmit={formSubmit}>
            <InputWrapper>
              <InputIcon src={email} />
              <InputDiv
                required
                name="message"
                value={message}
                onChange={onChange}
                id="message"
                placeholder="Your email"
              />{" "}
              <br />
            </InputWrapper>

            <SubScribe>Subscribe</SubScribe>
          </Newsletter>
        </SectionContent>
      </SectionWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 0 20px;
`;
const SectionWrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 100px auto;
  height: 407px;
  background: #dfd7f9;
  border-radius: 20px 129px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;
const SectionContent = styled.div`
  width: 100%;
`;
const Sub = styled(mediumText)`
  color: #5e6282;
  font-size: 33px;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;

  text-align: center;
  @media only screen and (max-width: 550px) {
    font-size: 24px;
    text-align: unset;
  }
`;
const Newsletter = styled.form`
     display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 0px;
    
  }
`;
const InputWrapper = styled.div`
  margin: 0 25px;
  width: 421px;
  height: 68px;
  display: flex;
  background: #fff;
  position: relative;
  border-radius: 10px;
  @media only screen and (max-width: 550px) {
    width: 100%;
    max-width: 200px;
  }
`;
const InputIcon = styled.img`
  width: 30px;
  height: 20px;
  position: absolute;
  top: 37%;
  left: 5%;
`;
const InputDiv = styled.input`
  width: 421px;
  height: 68px;
  outline: none;
  box-shadow: none;
  border: none;
  margin-left: 60px;
  border-radius: 10px;
  @media only screen and (max-width: 550px) {
    width: 100%;
    max-width: 200px;
  }
`;
const SubScribe = styled(btn)`
  background: linear-gradient(180deg, #ff946d 0%, #ff7d68 100%);
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  @media only screen and (max-width: 550px) {
    font-size: 14px;
    font-weight: 400;
  }
`;
export default SubscriptionSection;
