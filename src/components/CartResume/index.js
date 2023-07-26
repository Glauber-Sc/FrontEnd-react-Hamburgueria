import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useCart } from "../../hooks/CartContext";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import { Button } from "../Button";
import { Container, ContainerEndereco } from "./styles";
import { Input } from "./../../containers/Login/styles";
import { ErrorMessage } from "../ErrorMessage";
import { useHistory } from "react-router-dom";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const schema = Yup.object().shape({
  description: Yup.string().required(
    "Digite seu endereço. Campo obrigatório***"
  ),
});

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);
  const { cartProducts, clearCart } = useCart();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { push } = useHistory();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts, deliveryTax]);

  const submitOrder = async (data) => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    await toast.promise(
      api.post("orders", { products: order, description: data.description }),
      {
        pending: "Realizando seu pedido...",
        success: "Pedido realizado com sucesso!",
        error: "Falha ao tentar realizar o seu pedido, tente novamente!",
      }
    );

    push("/");

    clearCart();
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <ContainerEndereco className="mt-10">
        <form noValidate onSubmit={handleSubmit(submitOrder)}>
          <div>
            <p className="endereco">Endereço</p>
            <Input
              className="input"
              as="textarea"
              type="text"
              placeholder="Digite seu endereço."
              {...register("description")}
            />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
            <Button style={{ width: "100%", marginTop: 30 }} type="submit">
              Finalizar pedido
            </Button>
          </div>
        </form>
        <div style={{ width: "100%", marginTop: 20 }}>
          <PayPalScriptProvider>
            <PayPalButtons />
          </PayPalScriptProvider>
        </div>
      </ContainerEndereco>
    </div>
  );
}
