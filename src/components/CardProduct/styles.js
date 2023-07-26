import styled from 'styled-components'

export const Container = styled.div`
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    gap: 12px;
    padding: 15px;
    width: 90vw;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

   
`


export const ProductDescription = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;

`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 15px;

   
`

export const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 19px;
    color: #000000;
    font-weight: 500;

    @media (max-width: 768px) {
        margin-top: 12px;
        padding:5px;
    }
`

export const ProductPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-top: 30px;

    @media (max-width: 768px) {
        margin-top: 12px;
    }
`



