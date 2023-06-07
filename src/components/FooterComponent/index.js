import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import React from 'react'

import BurgerLogo from '../../assets/burger-logo.svg'
import { FooterContainer, ImageLogo, P, Socials, Copy } from './styles'
import { Link } from 'react-router-dom';

export function FooterComponent() {
    return (
        <FooterContainer>
            <ImageLogo src={BurgerLogo} alt="Logo-CodeBurger" />
       
            <Socials>
                <FacebookIcon className="icon" />
                <InstagramIcon className="icon" />
                <WhatsAppIcon className="icon" />
            </Socials>
            <hr />
            <Copy>&copy; 2023 MadrugasBurgue</Copy>
        </FooterContainer>
    )
}
