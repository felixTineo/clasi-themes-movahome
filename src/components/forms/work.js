import React, { useContext, useState, useReducer } from "react";
import context from "../../context";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { CheckCircleOutlined, LoadingOutlined } from "@ant-design/icons";

import { Button } from "../../styled-components";
import { Input, Select, Autocomplete, Textarea, Upload } from "../inputs";
import { message } from "antd";

const Form = styled.form``;
const Title = styled.h2`
  color: ${(props) => props.theme.secondaryColor};
`;
const ButtonCont = styled.footer`
  display: flex;
  justify-content: center;
`;

export default () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useReducer(
    (current, next) => ({ ...current, ...next }),
    {
      name: "",
      email: "",
      phone: "",
      jobTitle: "",
      message: "",
      curriculum: [],
    }
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let body = new FormData();
    body.append("name", values.name);
    body.append("email", values.email);
    body.append("phone", values.phone);
    body.append("jobTitle", values.jobTitle);
    body.append("message", values.message);
    if (values.curriculum.length > 0) {
      body.append("curriculum", values.curriculum[0].originFileObj);
    }

    try {
      const options = {
        //headers: { "Content-type" : "application/json" },
        method: "POST",
        body,
        //mode: "cors",
      };
      const data = await fetch("/sendcurriculum.php", options);
      const result = await data.text();
      setLoading(false);
      if (result.includes("success")) {
        setSuccess(true);
        setValues({
          name: "",
          email: "",
          phone: "",
          jobTitle: "",
          message: "",
          curriculum: [],
        });
        message.success("Mensaje enviado correctamente");
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        throw new Error("No puedo enviarse la propiedad");
      }
    } catch (e) {
      setLoading(false);
      message.error(
        "El mensaje no pudo ser enviado. Ingrese los datos correctamente"
      );
      console.log("ERROR CONFIENOS SU PROPIEDAD", e);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col xs={12}>
          <Input
            placeholder='Nombre'
            gray
            withMargin
            //disabled={loading}
            id='name'
            onChange={(e) => setValues({ name: e.target.value })}
            value={values.name}
            disabled={loading}
          />
        </Col>
        <Col xs={12}>
          <Input
            placeholder='Email'
            gray
            withMargin
            //disabled={loading}
            id='email'
            onChange={(e) => setValues({ email: e.target.value })}
            value={values.email}
            disabled={loading}
          />
        </Col>
        <Col xs={12}>
          <Input
            placeholder='Teléfono'
            gray
            withMargin
            id='phone'
            //disabled={loading}
            onChange={(e) => setValues({ phone: e.target.value })}
            value={values.phone}
            disabled={loading}
          />
        </Col>
        <Col xs={12}>
          <Select
            id='jobTitle'
            default='Cargo'
            options={["CORREDOR", "CAPTADOR", "BROKER"]}
            primary
            capitalize
            onChange={(e) => setValues({ jobTitle: e.target.value })}
            value={values.jobTitle}
            disabled={loading}
          />
        </Col>
        <Col xs={12}>
          <Textarea
            id='message'
            rows='4'
            placeholder='Mensaje'
            gray
            withMargin
            //disabled={loading}
            onChange={(e) => setValues({ message: e.target.value })}
            value={values.message}
            disabled={loading}
          />
        </Col>
        <Col xs={12}>
          <Upload
            handleChange={setValues}
            type='curriculum'
            limit={1}
            value='curriculum'
            disabled={loading}
            fileList={values.curriculum}
          />
        </Col>
      </Row>
      <br />
      <ButtonCont>
        <div style={{ width: "50%" }}>
          <Button
            block
            type='submit'
            style={success ? { backgroundColor: "#28a745" } : {}}
            primary
          >
            {!loading && !success && "Enviar"}
            {loading && (
              <>
                <LoadingOutlined style={{ marginLeft: ".5rem" }} spin />{" "}
                Enviando..
              </>
            )}
            {success && (
              <>
                <CheckCircleOutlined
                  style={{ marginLeft: ".5rem", marginRight: "10px" }}
                />
                {"  "} Mensaje enviado
              </>
            )}
          </Button>
        </div>
      </ButtonCont>
    </Form>
  );
};
