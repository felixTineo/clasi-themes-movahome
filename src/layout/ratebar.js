import React, { useEffect, useReducer, useContext } from "react";
import context from "../context";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { LoadingOutlined } from "@ant-design/icons";

const MainCont = styled.div`
  padding: 0;
  user-select: none;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  @media (min-width: 992px) {
    font-size: 0.7rem;
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

const InnerCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ContactCont = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;

const ContactLink = styled.a`
  color: #fff !important;
  text-decoration: none;
  &:hover {
    text-decoration: underline !important;
  }
`;
const RatesCont = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  @media (min-width: 992px) {
    font-weight: normal;
    justify-content: flex-end;
    //color: ${(props) => props.theme.primaryColor};
    margin: 0;
  }
`;
const RateItem = styled.li`
  margin-left: 0.3rem;
  &::after {
    content: " -";
  }
  @media (min-width: 768px) {
    margin-left: 0.5rem;
    &::after {
      content: " /";
    }
  }
`;
const RateItemNoAfter = styled(RateItem)`
  &::after {
    content: "";
  }
  @media (min-width: 768px) {
    &::after {
      content: "";
    }
  }
`;

export default () => {
  const state = useContext(context);
  const [query, setQuery] = useReducer(
    (current, next) => ({ ...current, ...next }),
    {
      data: null,
      error: false,
      loading: true,
    }
  );

  const getData = async (url) => {
    try {
      const data = await fetch(url);
      const result = await data.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  };

  const getAllData = async () => {
    const localData = window.localStorage.getItem("indicators");
    const parsedData = localData ? JSON.parse(localData) : null;
    const today = new Date(Date.now());
    const lastDay = parsedData ? new Date(parsedData.date) : null;
    const requestApi = !localData || today.getDate() >= lastDay.getDate() + 1;
    if (requestApi) {
      try {
        const urls = [
          "https://mindicador.cl/api/uf",
          "https://mindicador.cl/api/utm",
          "https://mindicador.cl/api/dolar",
        ];
        const data = await Promise.all(urls.map((url) => getData(url)));
        const indicators = {
          date: Date.now(),
          uf: data[0].serie[0].valor,
          utm: data[1].serie[0].valor,
          dollar: data[2].serie[0].valor,
        };

        console.log("ALL DATA RATE TODAY", indicators);
        window.localStorage.setItem("indicators", JSON.stringify(indicators));
        setQuery({ loading: false, error: false, data: indicators });
      } catch (e) {
        console.log(e);
        setQuery({ loading: false, error: true, data: null });
      }
    } else {
      setQuery({ loading: false, error: false, data: JSON.parse(localData) });
    }
  };

  useEffect(() => {
    if (window !== "undefined") {
      getAllData();
    }
  }, []);

  if (query.loading)
    return (
      <MainCont>
        <Container>
          <InnerCont>
            <ContactCont>¿Necesitas ayuda? contactanos</ContactCont>
            <RatesCont>
              <RateItem>
                UF{" "}
                <span>
                  <LoadingOutlined />
                </span>
              </RateItem>
              <RateItem>
                UTM{" "}
                <span>
                  <LoadingOutlined />
                </span>
              </RateItem>
              <RateItemNoAfter>
                Dólar{" "}
                <span>
                  <LoadingOutlined />
                </span>
              </RateItemNoAfter>
            </RatesCont>
          </InnerCont>
        </Container>
      </MainCont>
    );

  if (query.error) return <span>error de conexión</span>;

  return (
    <MainCont>
      <Container>
        <InnerCont>
          <ContactCont>
            ¿Necesitas ayuda? contactanos{" "}
            <ContactLink href={`mailto:${state.email}`}>
              {state.email}
            </ContactLink>
          </ContactCont>
          <RatesCont>
            <RateItem>UF ${query.data.uf}</RateItem>
            <RateItem>UTM ${query.data.utm}</RateItem>
            <RateItemNoAfter>Dólar ${query.data.dollar}</RateItemNoAfter>
          </RatesCont>
        </InnerCont>
      </Container>
    </MainCont>
  );
};
