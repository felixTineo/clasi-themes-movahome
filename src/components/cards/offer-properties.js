import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { priceFormat, truncate } from '../../util';
import { Site, Surface, Parking, Bath, Rooms } from '../../icons';

const AniLinkCustom = styled(AniLink)`
  color: inherit !important;
  display: block;
  //border-radius: 6px;
  overflow: hidden;
  transition: 250ms ease;
  margin-bottom: 2rem;
  border: 1px solid #dedede;
  border-bottom: none;
  margin-right: ${props => props.noMargin ? "0" : "1rem"};
  &:hover{
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
  }
`

const Title = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: .8rem 1rem; 
  margin: 0;
  text-transform: uppercase;
`

const Card = styled.div`
  width: 95%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding: .8rem 1rem;  
  padding-top: 0;
  @media(min-width: 768px){
    width: 100%;
    flex-direction: row;
  }
`
const Image = styled.div`
  width: 100%;
  padding-top: 275px;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
  position: relative;
  @media(min-width: 768px){
    width: 50%;
  }
`
const Operation = styled.p`
  margin: 0;
  padding: .8rem 1rem; 
    font-size: .8rem;
  background-color: ${props => props.theme.secondaryColor};
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
`
const InfoCont = styled.div`
  //padding: 0 1rem; 
  width: 100%;
  @media(min-width: 768px){
    width: 50%;
  }
`
const Public = styled.p`
  padding: .8rem 1rem; 
  min-height: 106.38px;
`
const PriceCont = styled.div`
  padding: .8rem 1rem; 
  font-size: .8rem;
  background-color: ${props => props.theme.secondaryColor};
  color: #fff;
  display: flex;
  align-items: center;
`
const Price = styled.p`
  margin: 0;
  text-transform: capitalize;
`
const Code = styled.p`
  margin: 0;
`
const CharsList = styled.ul`
  margin: 0;
  color: gray;
  font-size: .8rem;
  padding:0;
  display: flex;
  flex-direction: column;
  min-height: 56.38px;
  border: 1px solid #dedede;
  li + li {
    border-left: 1px solid rgba(0, 0, 0, .1);
  }
  span{
    margin-left: .5rem;
  }
  @media(min-width: 768px){
    flex-direction: row;
  }
`
const CharItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: .3rem;
  padding: .8rem 1rem; 
  &:last-child{
    flex: 1;
  }
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
  operation,
  propertyType,
  publicObservations,
  noMargin
})=>{
  const state = useContext(context);
  return(
    <AniLinkCustom paintDrip hex={state.primaryColor} to={`/property?id=${_id}`} duration={.5} noMargin={noMargin}>
      <Title>
        {title}
      </Title>
      <Card>
        <Image src={mainImage}>
          <Operation>{operation}</Operation>
        </Image>
        <InfoCont>
          <PriceCont>
            <Price>
              {
                `${currency} ${currency === "UF" ? value : priceFormat(value)}` + " - " + propertyType.toLowerCase()
                //truncate(title, 50)
              }
            </Price>
          </PriceCont> 
          <Public>
            {truncate(publicObservations, 150)}
          </Public>
        </InfoCont>
      </Card>
      <CharsList>
{/*        <CharItem>
          <Site />
          <span>
            {ubication.commune}
          </span>
</CharItem>*/}
        {
          characteristics.filter(char => (
            char.name === "Superficie total" ||
            char.name === "Habitaciones" ||
            char.name === "Baños" ||
            char.name === "Estacionamientos"

          ) ).map((char, index) => (
            <CharItem key={index}>
              {
                char.name === "Superficie total" && <Surface /> ||
                char.name === "Habitaciones" && <Rooms /> ||
                char.name === "Baños" && <Bath /> ||
                char.name === "Estacionamientos" && <Parking />
              }
              {/*<span>{char.name} {char.value} {char.name === "Superficie total" && "mt2" || char.name === "Superficie útil" && "mt2"}</span>*/}
              {
                char.name === "Superficie total" && <span>{char.value} m2</span> ||
                char.name === "Habitaciones" && <span>{char.value} Dormitorios</span> ||
                char.name === "Baños" && <span>{char.value} Baños</span> ||
                char.name === "Estacionamientos" && <span>{char.value} Estac.</span>
              }
            </CharItem>
          ))
        }                          
      </CharsList>           
    </AniLinkCustom>
  )
}