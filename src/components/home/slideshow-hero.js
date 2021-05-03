import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SLIDERS = [
  {
    id: "slide-1",
    title: "Bienvenidos a Movahome",
    subTitle: "la propiedad que buscas está más cerca de que lo que crees.",
    src: require("../../images/slide-1.jpg"),
  },
  {
    id: "slide-2",
    title: "Servicio profesional",
    subTitle: "adaptado a cada cliente.",
    src: require("../../images/slide-2.jpg"),
  },
  {
    id: "slide-3",
    title: "Únete a este gran equipo",
    subTitle: "logra tus objetivos junto a Movahome.",
    src: require("../../images/slide-3.jpg"),
  },
];

const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  @media(min-width: 768px){
    height: calc(100vh - 166.7px - 121.78px);
  }
`
const SlideImage = styled.div`
  width: 100%;
  height: calc(100vh - 95.38px);
  background-image: linear-gradient(to right, rgba(0, 0, 0, .5), transparent), url("${props => props.src}");
  background-size: cover;
  background-position: ${props => props.index === 0 ? "top" : "center"};
  @media(min-width: 768px){
    height: calc(100vh - 153.38px);
  }
`
const TitleCont = styled.div`
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
`
const Title = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`
const SubTitle = styled.p`
  margin: 0;
  font-size: 1.5rem;
`
const DotsCont = styled.div`
  position: absolute;
  bottom: 0;
  right: .5rem;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(min-width: 768px){
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;    
    flex-direction: row;
    justify-content: center;
    button + button{
    margin-left: 1rem;
  }
  }
`
const CustonDot = styled(Dot)`
  padding: 0;
  //border-radius: 50%;
  background: rgba(255, 255, 255, .5);
  border: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-bottom: .5rem;
  @media(min-width: 768px){
    border-radius: 0;
    width: 100px !important;
    height: 6px;
    margin-bottom: .5rem;
  }
  &:disabled{
    background: #fff;
  }
`
export default ()=> {

  return(
    <CarouselProvider
      naturalSlideWidth={100}
      //naturalSlideHeight={125}
      isIntrinsicHeight
      totalSlides={3}
      isPlaying
      interval={5000}
    >
      <Slider>
        {
          SLIDERS.map((item, index) => (
            <Slide index={index}>
              <SlideImage src={item.src} alt={item.title} index={index}>
                <TitleCont>
                  <Container>
                    <Title className="title">{item.title}</Title>
                    <SubTitle className="title">{item.subTitle}</SubTitle>
                  </Container>
                </TitleCont>
              </SlideImage>
            </Slide>
          ))
        }
      </Slider>
      <DotsCont>
        <CustonDot slide={0} />
        <CustonDot slide={1} />
        <CustonDot slide={2} />    
      </DotsCont>
    </CarouselProvider>
  )
}