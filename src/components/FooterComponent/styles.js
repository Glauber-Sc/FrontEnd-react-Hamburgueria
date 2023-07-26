import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #000;
    padding: 0 110px;

    hr {
        width: 100%;
        border: 1px solid #8f8888db;
    }
`

export const ImageLogo = styled.img`
    margin-top: 50px;
    width: 200px;

`

export const P = styled.p`
    margin: 50px 0;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #fff;
`

export const Socials = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    margin-top: 15px;

    .icon {
        font-size: 35px;
      
        color: #fff
    }

    .icon:hover {
        color: #F0C137;
        transition: ease-in-out 0.5s;
    }
`

export const Copy = styled.p`
    margin: 30px 0;
    color: #fff;
`
