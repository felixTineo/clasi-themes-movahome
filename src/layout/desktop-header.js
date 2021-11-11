import React, { useContext, useState, Fragment } from "react";
import context from "../context";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Link from "../components/link";
import { Dropdown, Menu } from "antd";

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
  font-size: 0.8rem;
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

const MenuCustom = styled(Menu)`
  background-color: ${(props) => props.theme.primaryColor};
`;
const Item = styled(Menu.Item)`
  color: #fff;
  transition: 250ms ease;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.secondaryColor};
  }
  a {
    color: #fff;
    &:hover {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;
const menu = (
  <MenuCustom>
    <Item>
      <Link to='/services'>Nuestros servicios</Link>
    </Item>
    <Item>
      <a href='/servicios.pdf' download>
        Mas información
      </a>
    </Item>
  </MenuCustom>
);

export default ({ dark, location }) => {
  const state = useContext(context);
  console.log("LOCATION-PATH", location === "/about");
  return (
    <Header className='d-none d-lg-block'>
      <RateBar />
      <Container>
        <Navigation>
          <Link to='/'>
            <Logo dark={dark} light={!dark} />
          </Link>
          <NavList horizontal>
            <NavItem>
              <Link to='/'>
                <NavLink
                  active={location === "/"}
                  dark={dark}
                  light={!dark}
                  first
                >
                  Inicio
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/properties/?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=office&id=5e8e36b31c9d440000d35090&propertyType=&operation=VENTA&commune=&stringSearch=&priceMin=&priceMax=&totalAreaFrom=&totalAreaTo=&bedrooms=&bathrooms=&currency=CLP'>
                <NavLink
                  active={location === "/properties"}
                  dark={dark}
                  light={!dark}
                >
                  Venta
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/properties/?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=office&id=5e8e36b31c9d440000d35090&propertyType=&operation=ARRIENDO&commune=&stringSearch=&priceMin=&priceMax=&totalAreaFrom=&totalAreaTo=&bedrooms=&bathrooms=&currency=CLP'>
                <NavLink
                  active={location === "/properties"}
                  dark={dark}
                  light={!dark}
                >
                  Arriendo
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/projects'>
                <NavLink
                  active={location === "/projects"}
                  dark={dark}
                  light={!dark}
                >
                  Proyectos
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/partners'>
                <NavLink
                  active={location === "/partners"}
                  dark={dark}
                  light={!dark}
                >
                  Asociados
                </NavLink>
              </Link>
            </NavItem>            
            <NavItem>
              <Link to='/contact'>
                <NavLink
                  active={location === "/contact"}
                  dark={dark}
                  light={!dark}
                >
                  Contacto
                </NavLink>
              </Link>
            </NavItem>
          </NavList>
        </Navigation>
      </Container>
    </Header>
  );
};
