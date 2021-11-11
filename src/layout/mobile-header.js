import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { Container } from 'react-bootstrap';
import Link from "../components/link";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

import Logo from './logo';
import RateBar from './ratebar';
import { NavLink } from '../styled-components';

const Header = styled.header`
  //overflow: hidden;
  background-color: ${props => props.theme.primaryColor};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: .5rem 0;
  z-index: 1000;
`
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavPanel = styled.div`
  background-color: ${props => props.theme.primaryColor};
  height: calc(100vh - 81.38px);
  width: 100vw;
  transition: 500ms ease;
  position: fixed;
  left: ${props => props.visible ? "0" : "100vw"};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0mm;
  margin: 0;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`
const NavItem = styled.li`
  font-size: 2rem;
`
const MenuCustom = styled(Menu)`
  background-color: ${props => props.theme.primaryColor};
`
const Item = styled(Menu.Item)`
  color: #fff;
  transition: 250ms ease;
  &:hover{
    background-color: transparent;
    color: ${props => props.theme.secondaryColor};
  }
  a{
    color: #fff;
    &:hover{
      color: ${props => props.theme.secondaryColor};
    }
  }
`
const menu = ({ onClick }) => (
  <MenuCustom>
    <Item>
      <Link to="/services" onClick={onClick}>Nuestros servicios</Link>
    </Item>
    <Item>
      <a href="/servicios.pdf" download>Mas información</a>
    </Item>    
  </MenuCustom>
)


export default ()=> {
  const [open, setOpen] = useState(false);
  const state = useContext(context);
  return(
    <Fragment>
    <Header className="d-lg-none">
      <Container>
        <Navigation>
          <Link to="/" onClick={()=> setOpen(false)}>
            <Logo mobile/>
          </Link>
          <HamburgerMenu
            isOpen={open}
            menuClicked={()=> setOpen(!open)}
            width={24}
            height={15}
            strokeWidth={2}
            rotate={0}
            color="#ffffff"
            borderRadius={0}
            animationDuration={0.5}
          />          
        </Navigation>
      </Container>
    </Header>
    <NavPanel visible={open}>
      <RateBar />
      <NavList>
        <NavItem>
          <Link to="/" onClick={()=> setOpen(false)} >
            <NavLink light>
              Inicio
            </NavLink>
          </Link>
        </NavItem>        
        <NavItem>
          <Link to="/properties/?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=office&id=5e8e36b31c9d440000d35090&propertyType=&operation=VENTA&commune=&stringSearch=&priceMin=&priceMax=&totalAreaFrom=&totalAreaTo=&bedrooms=&bathrooms=&currency=CLP" onClick={()=> setOpen(false)} >
            <NavLink light>
              Venta
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/properties/?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=office&id=5e8e36b31c9d440000d35090&propertyType=&operation=ARRIENDO&commune=&stringSearch=&priceMin=&priceMax=&totalAreaFrom=&totalAreaTo=&bedrooms=&bathrooms=&currency=CLP" onClick={()=> setOpen(false)} >
            <NavLink light>
              Arriendo
            </NavLink>
          </Link>
        </NavItem>         
        {/* <NavItem>
          <Link to="/map" onClick={()=> setOpen(false)} >
            <NavLink light>
              Mapa
            </NavLink>
          </Link>
        </NavItem>         */}
        <NavItem>
          <Link to="/partners" onClick={()=> setOpen(false)} >
            <NavLink light>
              Asociados
            </NavLink>
          </Link>
        </NavItem>              
        <NavItem>
          <Link to="/contact" onClick={()=> setOpen(false)} >
            <NavLink light>
              Contacto
            </NavLink>
          </Link>
        </NavItem>                                       
      </NavList>
      <NavList horizontal>
        <NavItem>
          <Link href={state.facebook} target="_blank" rel="noopener">
            <NavLink light>
              <FacebookOutlined />
            </NavLink>
          </Link>
        </NavItem>           
        <NavItem>
          <Link href={state.instagram} target="_blank" rel="noopener">
            <NavLink light>
              <InstagramOutlined style={{ margin: "0 1rem" }} />
            </NavLink>
          </Link>
        </NavItem>           
        <NavItem>
          <Link href={state.twitter} target="_blank" rel="noopener">
            <NavLink light>
              <TwitterOutlined />
            </NavLink>
          </Link>
        </NavItem>                           
      </NavList>
    </NavPanel>
  </Fragment>      
  )
}