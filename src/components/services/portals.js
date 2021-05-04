import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { Container } from 'react-bootstrap';
import { v1 as uuid } from 'uuid';
import PORTALS from '../../constants/PORTALS.json';

const VeryMainCont = styled.section`
  //margin-top: 6rem;  
  margin: 4rem 0;
  background-color: #fff;
  padding: 2rem 0;
`
const MainCont = styled.div`
  display: flex;
  position: relative;
  left: -200px;
  width: calc(100% + 200px);
  padding: 3rem 0;
  overflow: hidden;
`

const Box = styled.div`
  width: 200px;
  height: 100%;
  //height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  flex-grow: 1;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  //padding: 0 3rem;
  //padding-top: 2rem;
`
const Logo = styled.img`
  object-fit: contain;
  object-position: center;
  //filter: grayscale(1);
`
const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin: 6rem 0;
`
const Link = styled.span`
  display: block;
  //filter: grayscale(1);
  //transition: 250ms ease;
  user-select: none;
  &:hover{
    //filter: grayscale(0);
  }
`

export default ()=> {
  let controller = null;

  useEffect(()=>{
    gsap.set(".box", {
      x: (i) => i * 200,
    });
    const mod = gsap.utils.wrap(0, 200 * 24);
    const tween = gsap.to(".box",{
      paused: true,
      duration: 120,
      x: "-=" + (200 * 24),
      ease: "linear",
      //paused: true,
      repeat: -1,
      modifiers:{
        x: x => mod(parseFloat(x)) + "px"
      },    
    });    
    controller = tween;
    tween.play();
  });

  return(
    <VeryMainCont>
      <MainCont id="elm">
      {
        PORTALS.map((item, i) => (
          <Box key={uuid()} className="box">
            <Logo width={item.width} height={item.height} src={item.src} alt={item.id} />
          </Box>          
        ))
      }
    </MainCont>      
    </VeryMainCont>
  )
}