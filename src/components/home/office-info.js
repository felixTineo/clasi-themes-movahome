import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Link from '../link';

import { Section, Button } from '../../styled-components';
import ServiceCarousel from '../carousels/services';
import ReviewsCarousel from '../carousels/reviews';
import { ClasiQuote } from '../../icons';

const Title = styled.h2`
  color: ${props => props.theme.primaryColor};
  margin-bottom: 4rem;
  @media(min-width: 768px){
    width: 50%;
  }
`
const SubTitle = styled.p`
  font-weight: bold;
  margin: 3rem 0;
`

const Services = styled.div`
  margin-bottom: 4rem;
  @media(min-width: 768px){
    margin-bottom: 0;
  }
`
const Reviews = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Quote = styled.p`
  color: ${props => props.theme.primaryColor};
  font-size: 4rem;
  margin: 4rem 0;
  //margin-top: auto;
  //justify-self: center;
`

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  @media(min-width: 768px){
    justify-content: flex-end;
  }
`


export default ()=>{

  return(
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>Ofrecemos un servicio ajustado a las necesidades de cada cliente</Title>  
            <Services>
              <ServiceCarousel />
            </Services>
          </Col>
          <Col xs={12}>
            <ButtonCont>
              <Link to="/services">
                <Button primary>Saber más</Button>
              </Link>
            </ButtonCont>
          </Col> 
        </Row>
      </Container>
    </Section>
  )
}