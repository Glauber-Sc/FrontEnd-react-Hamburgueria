import styled from 'styled-components'

export const Container = styled.div`
    background: #ffffff;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    display: flex;
    gap: 12px;
    padding: 16px;
    width: max-content;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 12px;
        border-radius: 20px;

        div {
            margin-top: 12px;
        }
    }
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 15px;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 200px;
        height: auto;
    }
`

export const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;

    @media (max-width: 768px) {
        text-align: center;
        margin-top: 12px;
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