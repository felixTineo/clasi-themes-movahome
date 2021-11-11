import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import context from "../../context";

import { Section } from "../../styled-components";

const MainCont = styled(Section)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${(props) => props.src}");
  //background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Title = styled.h2`
  //width: 50%;
  color: #fff;
`;

export default () => {
  const state = useContext(context);
  return (
    <MainCont first height='60vh' src={require("../../images/hero-partners.jpg")}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Title>PROYECTOS</Title>
          </Col>
        </Row>
      </Container>
    </MainCont>
  );
};
