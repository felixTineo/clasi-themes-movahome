import React, { useEffect, useContext, useReducer } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { LeftOutlined, RightOutlined, LoadingOutlined, FrownOutlined } from '@ant-design/icons';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import ReactPaginate from 'react-paginate';

import { Section } from '../../styled-components';
import Property from '../cards/offer-properties';
import LastProperties from '../cards/property';
import Form from '../forms/square';

const ColCustom = styled(Col)`
  @media(min-width: 768px){
    border: 1px solid #dedede;
  padding: 1rem 2rem;
  }
`

const NavPaginate = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 0;
  outline: none !important;
  color: #979797;
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  .list-item{
    margin: 0 .5rem;
  }
  .active{
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .next-button-paginate{
    color: ${props => props.theme.primaryColor};
    transition: 250ms ease;
    &:hover{
      filter: brightness(1.1);
    }
  }
  .control-disabled{
    color: #979797;
  }
`
const StandCont = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${props => props.loading ? props.theme.primaryColor : "#979797"};
`
const NoDataCont = styled(StandCont)`
  color: #979797;
`

const LoadingCont = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;  
  color: ${props => props.theme.primaryColor};
`
const FormCont = styled.div`

`
const Title = styled.h2`
  font-size: 1.2rem;
  padding: .5rem .8rem;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 0;
  display: ${props =>props.block ? "block" : "inline-block"};
`
const LastPropertiesCont = styled.div`
  margin-top: 2rem;
`

export default ()=> {
  const location = useLocation();
  const { typeId, officeId } = useContext(context);
  const { featuredProperties } = useContext(context);
  const [query, setQuery] = useReducer((current, next) => ({ ...current, ...next }), {
    loading: true,
    error: false,
    data: null,
  })
  
  const getProperties = async ()=> {
    setQuery({ loading: true });
    try{
      const baseUrl = `https://api.clasihome.com/rest/properties/`;
      const params = location.search ? location.search : `?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=${typeId}&id=${officeId}`;
      const url = baseUrl + params;
      const data = await fetch(url);
      const result = await data.json();
      setQuery({ loading: false, data: result, error: false });
    }
    catch(e){
      console.log("ERROR EN PROPERTIES", e);
      setQuery({ loading: false, data: null, error: true });
    }
  }

  const handlePaginate =(val)=> {
      console.log(val.selected);
      //const url = urlBuilder('/properties',{...params, page: val.selected} );
      const params = location.search ? location.search : `?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=${typeId}&id=${officeId}`;
      const url = `/properties/` + params + `&page=${val.selected}`;
      navigate(url);
  };

  useEffect(()=>{
    getProperties();
  },[location.search]);

  if(query.loading) return(
    <LoadingCont>
      <LoadingOutlined />
    </LoadingCont>
  )

  if(query.error) return(
    <LoadingCont>
      <span>Error de conexión</span>
    </LoadingCont>    
  )

  return(
    <Section height="100vh" style={{ marginTop: "4rem" }}>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Row>
            <Col xs={12} style={{ paddingLeft: 0 }}>
              <Title>Resultado de búsqueda</Title>
            </Col>
            <ColCustom xs={12} md={12}>
              {
                query.data.properties.map((property) => (
                  
                    <Property {...property} />
                ))
              }
            </ColCustom>
              {
                query.data.totalRegistersQuery > 12
                && (
                  <Col xs={12}>
                    <NavPaginate>
                      <ReactPaginate
                        pageCount={query.data.totalRegistersQuery / 12}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={4}
                        disableInitialCallback
                        onPageChange={handlePaginate}
                        initialPage={parseInt(query.data.page, 10)}
                        previousLabel={<LeftOutlined style={{ fontSize: 24 }} />}
                        nextLabel={<RightOutlined style={{ fontSize: 24 }} />}
                        pageClassName="list-item"
                        activeClassName="active"
                        containerClassName="container"
                        nextClassName="next-button-paginate"
                        previousClassName="next-button-paginate"
                        disabledClassName="control-disabled"
                      />
                    </NavPaginate>
                  </Col>
                )
              }          
              {
                query.data.totalRegistersQuery === 0 &&            (
                  <Col xs={12}>
                    <NoDataCont>
                      <FrownOutlined />
                      <p>No se encontraron resultados</p>
                    </NoDataCont>                
                  </Col>
                )
              }            
            </Row>            
          </Col>
          <Col xs={12} md={3}>
            <FormCont>
              <Title block>Busque su propiedad</Title>
              <Form column />
            </FormCont>
            <LastPropertiesCont>
              <Title block>Propiedades Destacadas</Title>
              {
                featuredProperties.map((item)=> (
                  <div className="my-4">
                    <LastProperties {...item} />
                  </div>
                ))
              }
            </LastPropertiesCont>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}