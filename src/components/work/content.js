import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

import { Section } from '../../styled-components';
import Map from '../map';
import Form from '../forms/work';

const SectionCustom = styled(Section)`

`
const Title = styled.h2`
  color: ${props => props.theme.secondaryColor};
`
const Description = styled.p`

`
const ContactCont = styled.footer`
  color: gray;
  font-size: .8rem;
  margin-bottom: 4rem;
`
const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const ContactItem = styled.li`

`
const SocialList = styled(ContactList)`
  display: flex;
  li + li{
    margin-left: .5rem;
  }
`
const ContactLink = styled.a`
  text-decoration: none;
  color: gray !important;
  &:hover{
    text-decoration: underline !important; 
  }
`

export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Container>
        <Row
          style={{
            border: "1px solid #d8d8d8",
            padding: "2.5rem 3rem;",
            backgroundColor: "#fff",
            borderRadius: ".3rem"
          }}        
        >
          <Col xs={12} md={6}>
            <Title>Complete el formulario y nos contactaremos a la brevedad</Title>
            <ContactCont>
              <ContactList>
                <ContactItem>
                  <ContactLink href="mailto:contacto@movahome.cl" rel="noopener" target="_blank">contacto@movahome.cl</ContactLink>
                </ContactItem>
                <ContactItem>
                  <ContactLink href="https://api.whatsapp.com/send?phone=+56937076768&text=Hola,%20estoy%20visitando%20su%20sitio%20Web%20y%20quisiera%20comunicarme%20con%20ustedes." rel="noopener" target="_blank">+56 9 37076768</ContactLink> /                   <ContactLink href="https://api.whatsapp.com/send?phone=++56942275479&text=Hola,%20estoy%20visitando%20su%20sitio%20Web%20y%20quisiera%20comunicarme%20con%20ustedes." rel="noopener" target="_blank">+56 9 42275479</ContactLink>
                </ContactItem>
                <ContactItem>
                  Dr. Barros Borgoño nº 71, of. 504, Providencia
                </ContactItem>                
                <ContactItem>
                  <SocialList>
                    <li>Síguenos en:</li>
                    <li>
                      <ContactLink href="https://www.facebook.com/movahomeProp" rel="noopener" target="_blank">
                        <FacebookOutlined />
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink href="https://www.instagram.com/movahome4/?hl=es-la" rel="noopener" target="_blank">
                        <InstagramOutlined />
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink href="https://www.linkedin.com/company/movahome" rel="noopener" target="_blank">
                        <LinkedinOutlined />
                      </ContactLink>
                    </li>                                
                  </SocialList>                  
                </ContactItem>
              </ContactList>
            </ContactCont>
            <div
              style={{
                border: "1px solid #d8d8d8",
                borderRadius: ".3rem"
              }}
            >
            {
              state.lat && (
                <Map
                lat={parseFloat(state.lat)}
                lng={parseFloat(state.lng)}
                height={300}
                zoom={15}
              />         
              )
            }     
            </div> 
          </Col>
          <Col xs={12} md={6}>
            <Form />
          </Col>          
        </Row>
      </Container>
    </SectionCustom>
  )
}