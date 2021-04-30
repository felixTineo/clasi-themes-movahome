import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Section } from '../../styled-components';
import Portals from './portals';

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

export default ()=> {

  return(
    <SectionCustom height="100vh">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Title>Software de Integración y difusión</Title>
            <Description>Herramienta innovadora para corredores, que permitirá subir sus propiedades de forma sencilla, intuitiva y en un solo lugar, permitiendo sincronizar sus publicaciones con los mejores portales inmobiliarios y con mayor tasa de conversión. Algunos beneficios de nuestra plataforma son los siguientes:</Description>
            <List>
              <Item>
                En unos cuantos pasos podrás publicar tu propiedad y difundirla de forma automática en diferentes portales.
              </Item>
              <Item>
                Podrás reducir significativamente los costos en dinero y tiempo que conlleva publicar masivamente. 
              </Item>
              <Item>
                Tendrás acceso a información que facilitará tu trabajo diario.
              </Item>
              <Item>
                Podrás emitir y organizar tus órdenes de visita y realizar seguimiento de estas. 
              </Item>                                          
              <Item>
                Si lo requieres, podrás diseñar tu propio sitio web, donde tus clientes te conocerán y buscarán tus servicios. 
              </Item>
              <Item>
                Podrás ser parte de alianzas estratégicas que te ayudarán al trabajo profesional que realizas. 
              </Item>
              <Item>
                Agregar contactos y mantenerlos al tanto de propiedades que cumplan con las características que busca tu cliente.
              </Item>
            </List>
          </Col>
          <Col xs={12} md={6} className="d-none d-md-block">
            <Image src={require("../../images/crm.png")} />
          </Col>          
        </Row>
      </Container>
      <Portals />
    </SectionCustom>
  )
}