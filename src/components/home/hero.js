import React, { useContext, useState, useEffect } from "react";
import context from "../../context";
import styled from "styled-components";
import { gsap } from "gsap";
import { Container } from "react-bootstrap";
import { SearchOutlined } from "@ant-design/icons";

import { Section } from "../../styled-components";
import FormProperty from "../forms/properties";
import FormCode from "../forms/code";
import { Agro } from "../../icons";
import SlideShow from "./slideshow-hero";

const MainCont = styled.div`
  //border: 1px solid gold;
  position: relative;
`;
const SearchTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${props => props.theme.secondaryColor};
  background-color: #2e2e2e;
  padding: .8rem 1rem;
  display: flex;
  align-items: center;
  font-weight: 300;
  span + span{
    margin-left: .5rem;
  }
`;

export default () => {
  const state = useContext(context);
  const [byCode, setByCode] = useState(false);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#title", {
      opacity: 0,
      y: 10,
      duration: 1.5,
      ease: "back.out(1.7)",
    })
      .from(
        "#search",
        { opacity: 0, y: 10, duration: 1, ease: "back.out(1.7)" },
        "-=1"
      )
      .from(
        "#formSearch",
        { opacity: 0, y: 10, duration: 1.5, ease: "back.out(1.7)" },
        "-=.5"
      )
      .from(
        "#downButton",
        { opacity: 0, y: 10, duration: 1.5, ease: "back.out(1.7)" },
        "-=.5"
      )
      .from("#downButton", { y: 5, repeat: -1, duration: 1.5, yoyo: true });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <MainCont src={state.home.hero.background} first height="100vh">
      <SlideShow />
      <Container style={{ position: "relative" }}>
        <SearchTitle>
          <SearchOutlined />
          <span>BUSCAR PROPIEDAD</span>
        </SearchTitle>
      </Container>
    </MainCont>
  );
};