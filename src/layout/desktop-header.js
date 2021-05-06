import React, { useContext, useState, Fragment } from "react";
import context from "../context";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Link from "../components/link";

import RateBar from "./ratebar";
import Logo from "./logo";
import { NavLink, Button } from "../styled-components";

const Header = styled.header`
  background-color: ${(props) => props.theme.primaryColor};
  //position: absolute;
  //top: 0;
  //left: 0;
  //width: 100%;
  //z-index: 1000;
`;
const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .8rem;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.horizontal ? "flex" : "block")};
  text-align: center;
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export default ({ dark, location }) => {
  const state = useContext(context);
  console.log("LOCATION-PATH", location === "/about");
  return (
    <Header className="d-none d-lg-block">
      <RateBar />
      <Container fluid>
        <Navigation>
          <Link to="/">
            <Logo dark={dark} light={!dark} />
          </Link>
          <NavList horizontal>
            <NavItem>
              <Link to="/about">
                <NavLink active={location === "/about"} dark={dark} light={!dark} first>
                  Nosotros
                </NavLink>
              </Link>
            </NavItem>            
            <NavItem>
              <Link to="/properties">
                <NavLink active={location === "/properties"} dark={dark} light={!dark}>
                  Propiedades
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/services">
                <NavLink active={location === "/services"} dark={dark} light={!dark}>
                  Servicios
                </NavLink>
              </Link>
            </NavItem>           
            <NavItem>
              <Link to="/confidence">
                <NavLink active={location === "/confidence"} dark={dark} light={!dark}>
                  Confienos su propiedad
                </NavLink>
              </Link>
            </NavItem>             
            <NavItem>
              <Link to="/contact">
                <NavLink active={location === "/contact"} dark={dark} light={!dark}>
                  Contacto
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/work">
                <NavLink active={location === "/work"} dark={dark} light={!dark}>
                  ¡Trabaje con nosotros!
                </NavLink>
              </Link>
            </NavItem>            
          </NavList>
        </Navigation>
      </Container>
    </Header>
  );
};
