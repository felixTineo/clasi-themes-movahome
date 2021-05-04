import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Container, Row, Col } from 'react-bootstrap';
import { EnvironmentOutlined } from '@ant-design/icons';

import { Section, Button } from '../../styled-components';
import Carousel from '../carousels/offer-properties';

const SectionCustom = styled(Section)`
  margin: 2rem 0;
  padding-top: 30rem;
  @media(min-width: 768px){
    padding-top: 5rem;
  }
`

const Title = styled.p`
  font-size: 1.5rem;
  //color: ${props => props.theme.primaryColor};
  text-align: center;
  margin-bottom: 3rem;
`
const PropertiesCarouselCont = styled.div`
  min-height: 50vh;
  margin-bottom: 1rem;
`
const Banner = styled.div`
  background-color: ${props => props.theme.primaryColor};
  padding: 3rem 2rem;
  color: #fff;
`

const BannerText = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`


export default ()=>{
  const state = useContext(context);

  return(
    <SectionCustom id="properties">
        <Title>
          Movahome - Ofertas
        </Title>
        <PropertiesCarouselCont>
          <Carousel />
        </PropertiesCarouselCont>
    </SectionCustom>
  )
}