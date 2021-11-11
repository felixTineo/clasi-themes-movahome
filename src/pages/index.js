import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Hero from '../components/home/hero';
import Search from '../components/home/search'
import OfferProperties from '../components/home/offer';
import Properties from '../components/home/properties';
import About from '../components/home/about';
import OfficeInfo from '../components/home/office-info';
import Contact from '../components/contact';

const BorderCont = styled.div`
  border: 1px solid #dedede;
  padding: 1rem 2rem;
  border-top: none;
  margin-bottom: 4rem;
`

export default ()=> {

  return(
    <Fragment>
      <Hero />
      <Search />
      <Container style={{ padding: 0 }}>
        {/* <BorderCont> */}
          <OfferProperties />
          <Properties />
          <OfficeInfo />
        {/* </BorderCont> */}
      </Container>
{/*      <About />
      <OfficeInfo />
<Contact />*/}
    </Fragment>
  )
}