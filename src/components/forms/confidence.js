import React, { useContext, useState, useReducer } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import PROPERTY_TYPE from '../../constants/PROPERTY_TYPE.json';
import COMMUNES from '../../constants/CITIES.json';
import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';

import { Button } from '../../styled-components';
import { Input, Select, Autocomplete, Textarea, Upload } from '../inputs';

const Form = styled.form` 

`
const Title = styled.h2`
  color: ${props => props.theme.secondaryColor};
  margin: 1rem 0;
`
const ButtonCont = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin: 0 1rem 2rem 0;
`

export default ()=> {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useReducer((current, next) => ({ ...current, ...next }), {
    name: "",
    email: "",
    phone: "",
    operation: "",
    propertyType: "",
    observations: "",
    commune: "",
    images: [],
  });

  const onSubmit = async(e)=> {
    e.preventDefault();
    setLoading(true);
    let body = new FormData();
    body.append("name", values.name);
    body.append("email", values.email);
    body.append("phone", values.phone);
    body.append("operation", values.operation);
    body.append("propertyType", values.propertyType);
    body.append("observations", values.observations);
    body.append("commune", values.commune);
    for(const image of values.images){
      body.append('images[]', image.originFileObj);
    }

    try{
      const options = {
        //headers: { "Content-type" : "application/json" },
        method: "POST",
        body,
        //mode: "cors",
      }
      const data = await fetch('/sendproperty.php', options);
      const result = await data.text();
      setLoading(false);
      if(result === 'success'){
        setSuccess(true);
        setTimeout(()=>{
          setSuccess(false);
          setValues({
            name: "",
            email: "",
            phone: "",
            operation: "",
            propertyType: "",
            observations: "",
            commune: "",
            images: [],
          })
        }, 5000);
      } else{
        throw new Error('No puedo enviarse la propiedad');
      }
    }
    catch(e){
      setLoading(false);
      console.log("ERROR CONFIENOS SU PROPIEDAD", e);
    }
  }

  return(
    <Form onSubmit={onSubmit}>
      <Row>
        <Col xs={12}>
          <Title>Complete el formulario</Title>
        </Col>
        <Col xs={12}>
          <Input 
            placeholder="Nombre"
            gray
            withMargin
            //disabled={loading}
            id="name"
            onChange={(e)=>setValues({ name: e.target.value })}
            value={values.name}
            disabled={loading}
          />          
        </Col>
        <Col xs={12}>
          <Input 
            placeholder="Email"
            gray
            withMargin
            //disabled={loading}
            id="email"
            onChange={(e)=>setValues({ email: e.target.value })}
            value={values.email}
            disabled={loading}
          />          
        </Col>
        <Col xs={12}>
          <Input 
            placeholder="Teléfono"
            gray
            withMargin
            id="phone"
            //disabled={loading}
            onChange={(e)=>setValues({ phone: e.target.value })}
            value={values.phone}
            disabled={loading}
          />          
        </Col>      
        <Col xs={12}>
          <Select
            id="operation"
            default="Operación"
            options={["VENTA", "ARRIENDO"]}
            primary
            capitalize
            onChange={(e)=>setValues({ operation: e.target.value })}
            value={values.operation}     
            disabled={loading}     
          />           
        </Col>
        <Col xs={12}>
          <Select
            id="propertyType"
            default="Tipo de propiedad"
            options={PROPERTY_TYPE}
            primary
            capitalize
            onChange={(e)=>setValues({ propertyType: e.target.value })}
            value={values.propertyType}     
            disabled={loading}     
          />           
        </Col>
        <Col xs={12}>
          <Autocomplete
            id="commune"
            onSelect={(e)=>setValues({ commune: e.target.value })}
            selected={values.commune}
            options={COMMUNES.map(val => val.name)}
            placeholder="Comuna"
            disabled={loading}
          />              
        </Col>        
        <Col xs={12}>
          <Textarea
            id="observations"
            rows="4"
            placeholder="Observaciones"
            gray   
            withMargin
            disabled={loading} 
            onChange={(e)=>setValues({ observations: e.target.value })}
            value={values.observations}                                   
          />          
        </Col>       
        <Col xs={12}>
          <Upload
            handleChange={setValues}
            type="imagen"
            disabled={loading}
            limit={8}
            value="images"
            fileList={values.images}
          />          
        </Col>        
      </Row>
      <br />
      <ButtonCont>
        <Button disabled={loading} type="submit" primary>
          Enviar
          {
          loading && <LoadingOutlined style={{ marginLeft: ".5rem" }} spin />
        }
        {
          success && <CheckCircleOutlined style={{ marginLeft: ".5rem" }} />
        }          
        </Button>
      </ButtonCont>
    </Form>
  )
}