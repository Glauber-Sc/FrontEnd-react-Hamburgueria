import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

import { useCart } from "../../hooks/CartContext";
import { Button } from "../Button";
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  ProductDescription,
} from "./styles";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();
  const { push } = useHistory();

  return (
    <>
      <Container>
        <Image src={product.url} alt="imagem do produto" />
        <div>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.formatedPrice}</ProductPrice>
        </div>
      </Container>
      <Container style={{ marginTop: "-18px" }}>
        <Button
          onClick={() => {
            putProductInCart(product);
            push("/carrinho");
          }}
        >
          Adicionar
        </Button>
      </Container>
    </>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
