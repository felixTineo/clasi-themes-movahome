import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Properties from '../forms/square';
import { Section } from '../../styled-components';

const SectionCustom = styled(Section)`  
  margin-bottom: 0;
`

const Title = styled.h2`

`

export default ()=> {

  return(
    <SectionCustom>
      <Container style={{ padding: 0 }}>
        <Properties />
      </Container>
    </SectionCustom>
  )
}