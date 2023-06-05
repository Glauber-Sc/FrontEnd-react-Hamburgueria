import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    align-items: center;
    background-color: #e5e5e5;
    padding: 35px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`

export const Image = styled.img`
    width: 448px;
    height: 501px;
    border-radius: 6px;
    margin-left: 160px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-left: 0;
        margin-bottom: 20px;
    }
`

export const DIV = styled.div`
    margin-left: 96px;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`

export const H2 = styled.h2`
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    color: #424242;

    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
        text-align: center;
    }
`

export const P = styled.p`
    width: 458px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #424242;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
    }
`