import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import CORREDORAS from '../../constants/CORREDORAS.json';

import { Section } from '../../styled-components';
import Map from '../map';
import Form from '../forms/confidence';

const SectionCustom = styled(Section)`
  
`
const PartnerCont = styled.div`
  background-color: #fff;
  margin-bottom: 2rem;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
`
const PartnerLogo = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`
const PartnerInfo = styled.div`
  padding: 1rem;
`
const PartnerName = styled.p`

`

export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Container>
        <Row>
          {
            CORREDORAS.map(item => (
              <Col xs={12} md={4}>
                <PartnerCont>
                  <PartnerLogo src={item.src} alt={item.id} />
                  <PartnerInfo>
                    {item.id}
                  </PartnerInfo>
                </PartnerCont>
              </Col>
            ))
          }
        </Row>
      </Container>
    </SectionCustom>
  )
}