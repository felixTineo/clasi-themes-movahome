import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Section } from '../../styled-components';

const SectionCustom = styled(Section)`

`

const Title = styled.h2`
  color: ${props => props.theme.secondaryColor};
`
const Description = styled.p`
  text-align: justify;
`
const List = styled.ol` 
  font-size: .8rem;
  color: gray;
`
const Item = styled.li`
  margin-bottom: 1rem;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
const LegalCont = styled.div`
  min-height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("${require("../../images/legal.jpg")}");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
  @media(min-width: 767px){
    #legal-inner{
    width: 50%;
  }
  }
`

export default ()=> {

  return(
    <SectionCustom height="100vh">
      <Container>
        <Row style={{ marginBottom: "8rem" }}>
          <Col xs={12} md={6}>
            <Image src={require("../../images/venta.jpg")} />
          </Col>                    
          <Col xs={12} md={6}>
            <Title>Ventas</Title>
            <Description>En Movahome ofrecemos un servicio integral que te acompaña de inicio a fin en los procesos de compraventa de tu propiedad, en este punto se considera lo siguiente:</Description>
            <List>
              <Item>
                Difusión de tu propiedad en portales inmobiliarios y RR.SS.
              </Item>
              <Item>
                Gestión e informe de visitas.
              </Item>
              <Item>
                Gestión e informe de ofertas.
              </Item>
              <Item>
                Redacción y firma de promesa de compraventa
              </Item>                                          
              <Item>
                Recopilación de antecedentes para estudios de título
              </Item>
              <Item>
                Entrega de carpeta legal al banco o a quien corresponda
              </Item>
              <Item>
                Redacción y firma de escritura de compraventa cuando la venta es al contado.
              </Item>
              <Item>
                Firma de Escritura de compraventa 
              </Item>
              <Item>
                Inscripción en el conservador de bienes raíces correspondiente
              </Item>
              <Item>
                Pago y entrega material de la propiedad.
              </Item>
            </List>
          </Col>              
          </Row>
          <Row style={{ marginBottom: "8rem" }}>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <Title>Arriendos</Title>
            <Description>Te acompañamos en la búsqueda del mejor candidato para el arriendo de tu propiedad, comprometiéndonos entre otras cosas a lo siguiente:</Description>
            <List>
              <Item>
                Difusión de tu propiedad en portales inmobiliarios y RR.SS.
              </Item>
              <Item>
                Evaluación comercial de la propiedad (Valores de arriendo por zona).
              </Item>
              <Item>
                Evaluación financiera y selección de los mejores candidatos arrendatarios.
              </Item>
              <Item>
                Elaboración del contrato de arriendo entre las partes.
              </Item>                                          
              <Item>
                Firma digital protocolizada ante notario.
              </Item>
              <Item>
                Redacción de inventario suscrito al contrato de arrendamiento.
              </Item>
              <Item>
                Entrega material de la propiedad y firma de acta.
              </Item>
              <Item>
                Administración de propiedad.
              </Item>
            </List>
          </Col>          
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <Image src={require("../../images/arriendo.jpg")} />
          </Col>                
        </Row>
        <Row style={{ marginBottom: "8rem" }}>
          <Col xs={12} md={6}>
            <Image src={require("../../images/complementarios.jpg")} />
          </Col>             
          <Col xs={12} md={6}>
            <Title>Servicios Complementarios</Title>
            <Description>Sabemos que para lograr tu éxito, necesitarás de ciertos instrumentos que te permitirán cerrar acuerdos de forma correcta. Es por ello, que te entregamos una serie de servicios complementarios que estamos seguros te ayudarán durante el proceso.</Description>
            <List>
              <Item>
                Confección y revisión de contratos civiles.
              </Item>
              <Item>
                Confección y revisión de contratos comerciales.
              </Item>
              <Item>
                Redacción de promesa de compraventa.
              </Item>
              <Item>
                Revisión de promesa de compraventa.
              </Item>                                          
              <Item>
                Redacción y revisión de estudios de título
              </Item>
              <Item>
                Redacción de escritura de compraventa.
              </Item>
              <Item>
                Redacción de contratos de arriendo.
              </Item>
              <Item>
                Redacción de pagaré para contratos de compraventa y arriendo.
              </Item>
              <Item>
                Instrucciones notariales.
              </Item>
              <Item>
                Tasaciones rurales y urbanas.
              </Item>                            
            </List>
          </Col>                       
        </Row>        
      </Container>
      <LegalCont>
        <div id="legal-inner">
          <Container>
            <Title>
              Asesoría Legal y comercial
            </Title>
            <Description>
              Queremos acompañarte durante todo el proceso de compraventa y arriendo de tus propiedades. Para ello, ponemos a tu disposición toda nuestra experiencia y conocimientos para que logres el objetivo de manera profesional. Además, si tienes dudas que requieran verse desde un punto de vista legal, podrás canalizarla a través de nuestros abogados cuando lo necesites.
            </Description>
          </Container>
        </div>
      </LegalCont>
    </SectionCustom>
  )
}