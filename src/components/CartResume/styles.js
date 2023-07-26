import styled from "styled-components";
//import { Container } from './../../containers/Products/styles';
import { Button } from "./../Button/index";

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";
      justify-content: space-between;


    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
      justify-content: space-between;
      
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`;

export const ContainerEndereco = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  width: 390px;

  .endereco {
    font-size: 20px;
    margin-left: 10px;
  }

  .input {
    margin-top: 5px;
    display: flex;
    width: max-content;
    height: 60px;
  }
`;


export const ErrorEndereco = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.10rem;
    line-height: 1rem;
    margin-left: 10px;
    color: #cc1717;
    margin-top: 0.12rem;
`