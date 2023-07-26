import React from 'react'

import CartLogo from '../../assets/logo-home.jpeg'
import {
    CartItems,
    CartResume,
    OffersCarousel,
    FooterComponent
} from '../../components'
import { Container, CartImage, Wrapper } from './styles'

export function Cart() {
    return (
        <Container>
            <CartImage src={CartLogo} alt="Logo do carrinho" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
            <OffersCarousel />
            <FooterComponent />
        </Container>
    )
}
