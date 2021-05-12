import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Link from "../components/link";
import { MailOutlined, PhoneOutlined, WhatsAppOutlined, EnvironmentOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, UpOutlined, LinkedinOutlined } from '@ant-design/icons';

import Logo from './logo';
import { NavLink } from '../styled-components';
import Map from '../components/map';

const Footer = styled.footer`
  padding: 1rem 0 0;
  background-color: ${props => props.theme.primaryColor};
`
const FooterText = styled.p`
  color: rgba(255, 255, 255, .5);
  font-size: .8rem;
  text-align: justify;
`
const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 1rem;
`
const InfoItem = styled.li`
  color: rgba(255, 255, 255, .5);
  font-size: .8rem;
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  span{
    margin-right: .3rem;
  }
`
const InfoLink = styled.a`
  color: rgba(255, 255, 255, .5) !important;
  &:hover{
    text-decoration: underline !important;
  }
`
const NavCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin-bottom: 1rem;
`
const NavItem = styled.li`
font-size: .8rem;
`
const SocialCont = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media(min-width: 992px){
    margin-bottom: 0;
  }
`
const SocialItem = styled.span`
  color: ${props => props.icon ? "#fff" : "rgba(255, 255, 255, .5)"};
  font-size: .8rem;
`
const SocialLink = styled.a`
  color: rgba(255, 255, 255, .5);
  margin-left: .5rem;
  font-size: 1.3rem;
  &:hover{
    color: #a99a62;
  }
`
const BackTop = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.theme.primaryColor};
  margin-bottom: 1rem;
  transition: 250ms ease;
  color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  &:hover{
    filter: brightness(1.1);
  };
  &:active{
    box-shadow: none;
  }
`

const CopyrightCont = styled.div`
  padding: .3rem 0;
  color: #fff;
  background-color: ${props => props.theme.primaryColor};
  font-size: .7rem;
  margin-top: 1rem;
`
const CopyrightInnerCont = styled.div`
  display: flex;
  justify-content: space-between;
`
const DevelopedBy = styled.a`
  color: #fff !important;
  transition: 250ms ease;
  font-weight: bold;
  &:hover{
    text-decoration: underline !important;
  }
`

export default ()=> {
  const state = useContext(context);

  return(
    <Footer>
      <Container>
        <Row className="align-items-center">
          <Col xs={{ span: 6, order: 6 }} md={{ span: 6, order: 0 }} lg={4}>
            <Link to="/">
              <Logo />
            </Link>
            <InfoList>
              {
                state.address && (
                  <InfoItem>
                    <EnvironmentOutlined />
                    {state.address}
                  </InfoItem>                  
                )
              }
              {
                state.email && (
                  <InfoItem>
                    <MailOutlined />
                    <InfoLink title="Enviar un email" href={`mailto:${state.email}`}>
                      {state.email}
                    </InfoLink>
                  </InfoItem>                  
                )
              }
              {
                state.phone && (
                  <InfoItem>
                    <PhoneOutlined />
                    <InfoLink title="Llamar" href={`tel:${state.phone.replace(/\s/g,'')}`}>
                      {state.phone}
                    </InfoLink>
                  </InfoItem>                
                )
              }
              {
                state.movil && (
                  <InfoItem>
                    <WhatsAppOutlined />
                    <InfoLink title="Enviar WhatsApp" rel="noopener" target="_blank" href={`https://api.whatsapp.com/send?phone=${state.movil.replace(/\s/g,'')}&text=Hola,%20estoy%20visitando%20su%20sitio%20Web%20y%20quisiera%20comunicarme%20con%20uestedes.`}>
                      {state.movil}
                    </InfoLink>
                  </InfoItem>                      
                )
              }          
            </InfoList>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <NavCont>
              <NavList>
                <NavItem>
                  <Link to="/about">
                    <NavLink first light>
                      Nosotros
                    </NavLink>
                  </Link>            
                </NavItem>                           
                <NavItem>
                  <Link to="/properties">
                    <NavLink light>
                      Propiedades
                    </NavLink>
                  </Link>            
                </NavItem>       
                <NavItem>
                  <Link to="/services">
                    <NavLink light>
                      Servicios
                    </NavLink>
                  </Link>            
                </NavItem>                                         
                <NavItem>
                  <Link to="/contact">
                    <NavLink light>
                      Contacto
                    </NavLink>
                  </Link>                                    
                </NavItem>
                <NavItem>
                  <Link href={`http://app.clasihome.com/login?logo=${state.logo}&primaryColor=${state.primaryColor.substring(1)}`} target="_blank" rel="noopener">
                    <NavLink light>
                      Login
                    </NavLink>
                  </Link>            
                </NavItem>    
              </NavList>            
              <FooterText>
                {state.footerText}
              </FooterText>
            </NavCont>
          </Col>                          
          <Col xs={{ span: 6, order: 12 }} md={12} lg={3}>
            <NavCont className="align-items-end">
              <BackTop onClick={()=> window.scrollTo(0, 0)} href="#top">
                <UpOutlined />
              </BackTop>                        
              <SocialCont>
                <SocialItem>Síguenos en:</SocialItem>
                <SocialLink href={state.facebook} rel="noopener" target="_blank">
                  <FacebookOutlined />
                </SocialLink>
                <SocialLink href={state.instagram} rel="noopener" target="_blank">
                  <InstagramOutlined />
                </SocialLink>
                <SocialLink href={state.twitter} rel="noopener" target="_blank">
                  <LinkedinOutlined />
                </SocialLink>                                    
              </SocialCont>                  
            </NavCont>
          </Col>
        </Row>
      </Container>
      <CopyrightCont>
        <Container>
          <CopyrightInnerCont>
            <span>{new Date().getFullYear()} © Todos los derechos reservados</span>
            <div>
              Desarrollado por <DevelopedBy href="https://clasihome.com" rel="noopener" target="_blank">Clasihome</DevelopedBy>
            </div>
          </CopyrightInnerCont>
        </Container>
      </CopyrightCont>
    </Footer>
  )
}