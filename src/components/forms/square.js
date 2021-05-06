import React, { useContext, useState, useEffect } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { SearchOutlined, SlidersOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';

import { useUrlForm } from '../../hooks';
import { Autocomplete, Select, Input } from '../inputs';
import PROPERTY_TYPE from '../../constants/PROPERTY_TYPE.json';
import COMMUNES from '../../constants/CITIES.json';
import { Button } from '../../styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Form = styled.form`
  border: 1px solid #dedede;
  padding: 1rem 2rem;
  padding-top: 2rem;
  background-color: #f2f2f2;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, .25);
  border-bottom-left-radius: .3rem;
  border-bottom-right-radius: .3rem;
`


export default ({ column })=> {
  const state = useContext(context);
  const [filter, setFilter] = useState(false);
  const { values, onChange, getUrl, setValues } = useUrlForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    totalAreaFrom: '',
    totalAreaTo: '',    
    bedrooms: '',
    bathrooms: '',
    currency: 'CLP',    
  });

  const handleFilter = ()=> {
    setValues({
      priceMin: '',
      priceMax: '',
      totalAreaFrom: '',
      totalAreaTo: '',    
      bedrooms: '',
      bathrooms: '',
      currency: 'CLP',          
    });
    setFilter(!filter);
  }

  return(
    <Form>
      <Row>
        <Col xs={12} md={column ? 12 : 3} style={{ marginBottom: "1rem" }}>
          <Select
            id="propertyType"
            onChange={onChange}
            value={values.propertyType}
            default="Propiedad"
            options={PROPERTY_TYPE}
            primary
            capitalize
          />    
        </Col>
        <Col xs={12} md={column ? 12 : 3} style={{ marginBottom: "1rem" }}>
          <Autocomplete
            id="commune"
            onSelect={onChange}
            selected={values.commune}
            options={COMMUNES.map(val => val.name)}
            placeholder="Comuna"
          />             
        </Col>
        <Col xs={12} md={column ? 12 : 3} style={{ marginBottom: "1rem" }}>
          <Select
            id="operation"
            onChange={onChange}        
            value={values.operation}          
            default="Operación"
            options={["VENTA", "ARRIENDO"]}
            primary
            capitalize
          />            
        </Col>
        <Col xs={12} md={column ? 12 : 3} style={{ marginBottom: "1rem" }}>
          <Select
            id="currency"
            onChange={onChange}
            value={values.currency}
            default="Propiedad"
            options={["CLP", "UF"]}
            primary
            noAll
          />           
        </Col>
        <Col xs={12} md={column ? 12 : 3} style={{ marginBottom: "1rem" }}>
          <Input
            id="priceMin"
            onChange={onChange}
            value={values.priceMin}
            placeholder="Precio desde"
            primary
            type="number"
            min={0}
          />          
        </Col>
        <Col xs={12} md={column ? 12 : 3} style={{ marginBottom: "1rem" }}>
          <Input
            id="priceMax"
            onChange={onChange}
            value={values.priceMax}
            placeholder="Precio hasta"
            primary
            type="number"
            min={0}
          />          
        </Col>
        <Col xs={12} md={column ? 12 : 3} style={{ marginBottom: "1rem" }}>
          <Autocomplete
            id="stringSearch"
            onSelect={onChange}
            selected={values.commune}
            placeholder="Buscar por código"
            icon
          />              
        </Col>      
        <Col xs={12} md={column ? 12 : 3}  style={{ marginBottom: "1rem" }}>
          <AniLink fade to={getUrl()} duration={.5}>
            <Button
              block
              primary
              type="submit"
              title="Buscar"
            >
              <span>Buscar</span>
            </Button>
          </AniLink>          
        </Col>
      </Row>
    </Form>
  )
}