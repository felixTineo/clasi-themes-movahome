import styled from 'styled-components';

export default styled.textarea`
  background-color: #fff;
  box-shadow: ${props => props.gray ? "none" : "0px 1px 1px rgba(0, 0, 0, .12), 0px 2px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
  border-radius: .3rem;
  padding: 5px;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: 'Rubik', sans-serif;
  margin-bottom: .2rem;
  border: ${props => props.gray ? "1px solid #cdcdcd" : "none"};       
  &:disabled      {
    background-color: rgba(0, 0, 0, .1);
    cursor: not-allowed;
  }        
  @media(min-width: 768px){
    margin-bottom: ${props => props.withMargin ? "1rem" : "0"};
    box-shadow: ${props => props.shadow ? "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)" : "none"};
  }
  &::placeholder{
    color: #878787;
  }
`