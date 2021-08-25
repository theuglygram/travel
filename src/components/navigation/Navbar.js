import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const toggleHamburger = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    setMenu(false);
  }, [location]);
  return (
    <NavWrapper>
      <LogoHolder>
        <Logo src={logo} />
      </LogoHolder>
      <LinkHolder toggle={menu}>
        <NavLinks toggle={menu}>
          <Link to="/">Desitnations</Link>
        </NavLinks>
        <NavLinks toggle={menu}>
          <Link to="/">Hotels</Link>
        </NavLinks>
        <NavLinks toggle={menu}>
          <Link to="/">Flights</Link>
        </NavLinks>
        <NavLinks toggle={menu}>
          <Link to="/">Bookings</Link>
        </NavLinks>
        <NavLinks toggle={menu}>
          <Link to="/">Login</Link>
        </NavLinks>
        <SignLinks toggle={menu}>
          <Link to="/">Sign up</Link>
        </SignLinks>
        <LangLinks toggle={menu}>EN ^</LangLinks>
      </LinkHolder>
      <Hamburger onClick={toggleHamburger}>
        <Menu1 toggle={menu} />
        <Menu2 toggle={menu} />
      </Hamburger>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 45px auto;
  max-width: 1170px;
  height: 40px;
  position: absolute;
  left: 50%;
  padding: 0 20px;
  transform: translateX(-50%);
`;
const LogoHolder = styled.div`
  height: 34px;
  width: 115px;
`;
const LinkHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  @media only screen and (max-width: 1000px) {
    position: absolute;
    top: -45px;
    left: 0;
    flex-direction: column;
    z-index: -5;
    height: 100vh;
    max-width: 100vw;
    width: 100%;
    background: #fff1da;
    z-index: 3;
    padding: 120px 24px 64px;
    transition: 0.9s ease-in;
    -o-transition: 0.9s ease-in;
    -moz-transition: 0.9s ease-in;
    transform: ${(props) =>
      props.toggle ? "translateX(0px)" : "translateX(-1500px)"};
    display: ${(props) => (props.toggle ? "flex" : "none")};
  }
`;
const Logo = styled.img`
  height: 34px;
  width: 115px;
  z-index: 9999;
`;
const NavLinks = styled.li`
  list-style: none;
  font-family: ${(props) =>
    props.toggle ? "GoogleSans-Bold" : "GoogleSans-Regular"};
  /* font-weight: ${(props) => (props.toggle ? "600" : "500")}; */
  font-size: ${(props) => (props.toggle ? "20" : "18")}px;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 0em;
  padding: ${(props) => (props.toggle ? "0 0 20" : "5 0")}px;
  border-bottom: ${(props) => (props.toggle ? "1px solid #d2d0d0b0" : "unset")};
  text-align: ${(props) => (props.toggle ? "center" : "unset")};
  width: ${(props) => (props.toggle ? "100%" : "unset")};
  cursor: pointer;
`;
const SignLinks = styled.li`
  list-style: none;
  list-style: none;
  font-family: GoogleSans-Regular;
  font-weight: 500;
  font-size: 17px;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 0em;
  border: 1px solid #000;
  padding: 5px 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;
const LangLinks = styled.li`
  list-style: none;
  list-style: none;
  font-family: GoogleSans-Regular;
  font-weight: 500;
  font-size: 17px;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 0em;
  padding: 5px 0;
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  z-index: 9999;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;
const Menu1 = styled.div`
  height: 2px;
  width: 25px;
  margin: 5px;
  background: #000;
  transform: ${(props) =>
    props.toggle ? "rotate(-45deg) translate(-1px,6px)" : "rotate(0)"};
`;
const Menu2 = styled.div`
  height: 2px;
  width: 25px;
  margin: 5px;
  background: #000;
  transform: ${(props) =>
    props.toggle ? "rotate(45deg) translate(1px,-6px)" : "rotate(0)"};
`;
export default Navbar;
