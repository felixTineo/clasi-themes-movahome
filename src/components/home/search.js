import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Properties from '../forms/square';
import { Section } from '../../styled-components';

const SectionCustom = styled(Section)`  
  margin-bottom: 0;
  position: relative;
`
const FormCont = styled.div`
  position: absolute;
  top: -90px;
`

const Title = styled.h2`

`

export default ()=> {

  return(
    <Container style={{ padding: 0 }}>
    <SectionCustom>
        <FormCont>
          <Properties />
        </FormCont>
    </SectionCustom>
    </Container>
  )
}