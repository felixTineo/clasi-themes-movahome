import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { priceFormat, truncate } from '../../util';
import { Site, Surface, Parking, Bath, Rooms } from '../../icons';

const AniLinkCustom = styled(AniLink)`
  color: inherit !important;
  display: block;
  overflow: hidden;
  transition: 250ms ease;
  &:hover{
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
  }
`

const Card = styled.div`
  width: 95%;
  border: 1px solid rgba(0, 0, 0, .1);
  min-height: 496.09px;
  @media(min-width: 768px){
    width: 100%;
    margin:0;
  }
`
const Image = styled.div`
  width: 100%;
  padding-top: 75%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
`
const InfoCont = styled.div`
  padding: 0 1rem; 
`
const TitleCont = styled.div`
  padding-top: 1rem;
  font-size: .8rem;
`
const Title = styled.p`
  margin: 0;
  min-height: 50px;
`
const Price = styled.p`
  margin: 0;
  color: ${props => props.theme.primaryColor};
`
const Code = styled.p`
  margin: 0;
`
const CharsList = styled.ul`
  padding: 0;
  margin: 0;
  color: gray;
  font-size: .8rem;
  padding: 1rem 0;
  span{
    margin-left: .5rem;
  }
`
const CharItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: .3rem;
  .value{
    margin-left: .5rem;
  }
`

export default ({
  mainImage,
  title,
  value,
  currency,
  code,
  ubication,
  characteristics,
  _id,
  operation
})=>{
  const state = useContext(context);
  return(
    <AniLinkCustom paintDrip hex={state.primaryColor} to={`/property?id=${_id}`} duration={.5}>
      <Card>
        <Image src={mainImage} />
        <InfoCont>
          <TitleCont>
            <Title>
              {
                truncate(title, 50)
              }
            </Title>
            <Price>
              {
                `${currency} ${currency === "UF" ? value : priceFormat(value)}`
              }
            </Price>
            <Code>
              <strong>
                {operation} -
              </strong>
              {code}
            </Code>
          </TitleCont>
          <CharsList>
            <CharItem>
              <Site />
              <span>
                {ubication.commune}
              </span>
            </CharItem>
            {
              characteristics.filter(char => (
                char.name === "Superficie total" ||
                char.name === "Superficie útil" ||
                char.name === "Habitaciones" ||
                char.name === "Baños" ||
                char.name === "Estacionamientos"

              ) ).map((char, index) => (
                <CharItem key={index}>
                  {
                    char.name === "Superficie total" && <Surface /> ||
                    char.name === "Superficie útil" && <Surface />  ||
                    char.name === "Habitaciones" && <Rooms /> ||
                    char.name === "Baños" && <Bath /> ||
                    char.name === "Estacionamientos" && <Parking />
                  }
                  <span>{char.name} {char.value} {char.name === "Superficie total" && "mt2" || char.name === "Superficie útil" && "mt2"}</span>
                </CharItem>
              ))
            }                          
          </CharsList>      
        </InfoCont>
      </Card>
    </AniLinkCustom>
  )
}