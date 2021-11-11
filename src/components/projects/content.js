import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PROJECTS from '../../constants/PROJECTS.json';

import { Section } from '../../styled-components';
import Map from '../map';
import Form from '../forms/confidence';

const SectionCustom = styled(Section)`
  
`
const ProjectCont = styled.div`
  background-color: #fff;
  margin-bottom: 3rem;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
`
const ProjectImageCont = styled.div`
  position: relative;
`
const ProjectOperationPriceCont = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  color: #fff;
  display: flex;
  font-size: .9rem;
  div{
    padding: .5rem;
    background-color: #101E2A;
  }
  div + div{
    background-color: #08C2D6;
  }
`
const ProjectImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
`
const ProjectInfo = styled.div`
  padding-top: 2rem;
  padding-right: 1rem;
  padding-bottom: .5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const ProjectTitle = styled.p`
  font-weight: bold;
`
const ProjectDescription = styled.p`
  flex-grow: 1;
  flex-shrink: 0;
  color: #666;
  font-size: .9rem;
`
const ProjectFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`
const FooterItemOuter = styled.div`
  display: flex;
  font-size: .8rem;
  div + div {
    margin-left: 1rem;
  }
`
const FooterItem = styled.div`
  display: flex;
  span{
    font-weight: bold;
  }
  span + span{
    font-weight: normal;
    margin-left: .5em;
    color: #666;
  }
`

export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Container>
        <Row>
          {
            PROJECTS.map(item => (
              <Col xs={12}>
                <ProjectCont>
                  <Row>
                    <Col xs={12} md={4}>
                      <ProjectImageCont>
                        <ProjectOperationPriceCont>
                          <div>
                            {item.currency}{" "}{item.value}
                          </div>
                          <div>
                            {item.operation}{"-"}{item.propertyType}
                          </div>                          
                        </ProjectOperationPriceCont>
                        <ProjectImage src={item.mainImage} alt={item.id} />
                      </ProjectImageCont>
                    </Col>
                    <Col xs={12} md={8}>
                      <ProjectInfo>
                        <ProjectTitle>
                          {item.title}
                        </ProjectTitle>
                        <ProjectDescription>
                          {item.description}
                        </ProjectDescription>
                        <ProjectFooter>
                          <FooterItemOuter>
                            <FooterItem>
                              <span>
                                Cod:
                              </span>
                              <span>
                                {item.id}
                              </span>
                            </FooterItem>
                            <FooterItem>
                              <span>
                                M2:
                              </span>
                              <span>
                                {item.m2}
                              </span>
                            </FooterItem>                            
                          </FooterItemOuter>
                          <FooterItemOuter>
                            {
                              item.bedrooms && (
                                <FooterItem>
                                <span>
                                  Bed:
                                </span>
                                <span>
                                {item.bedrooms}
                                </span>
                              </FooterItem>
                              )
                            }
                            {
                              item.bathrooms && (
                                <FooterItem>
                                <span>
                                  Bath:
                                </span>
                                <span>
                                {item.bathrooms}
                                </span>
                              </FooterItem>  
                              )
                            }                            

                          
                          </FooterItemOuter>                          
                        </ProjectFooter>
                      </ProjectInfo>
                    </Col>
                  </Row>
                </ProjectCont>
              </Col>
            ))
          }
        </Row>
      </Container>
    </SectionCustom>
  )
}