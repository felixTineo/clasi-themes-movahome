import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { SearchOutlined } from "@ant-design/icons";

import Properties from '../forms/square';
import { Section } from '../../styled-components';

const SectionCustom = styled(Section)`  
  margin-bottom: 0;
  position: relative;
  z-index: 2;
`
const FormCont = styled.div`
  position: absolute;
  top: calc((-235.78px / 2) - 25px);
  opacity: .9;
  //margin-left: 3rem;
  //margin-right: 3rem;
  border-radius: .3rem;
`

const Title = styled.h2`

`
const SearchTitle = styled.div`
  color: ${props => props.theme.secondaryColor};
  border-radius: .3rem;
  background-color: ${props => props.theme.primaryColor};
  padding: .8rem 1rem;
  display: flex;
  align-items: center;
  font-weight: 300;
  span + span{
    margin-left: .5rem;
  }
`;

export default ()=> {

  return(
    <Container style={{ padding: 0 }}>
    <SectionCustom>
        <FormCont>
          <SearchTitle>
            <SearchOutlined />
            <span>BUSCAR PROPIEDAD</span>
          </SearchTitle>          
          <Properties />
        </FormCont>
    </SectionCustom>
    </Container>
  )
}