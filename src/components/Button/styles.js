import styled from 'styled-components'

export const ContainerButton = styled.button`
    width: 11.426rem;
    height: 2.258rem;
    background: #F0C137;
    border-radius: 1.25rem;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.18rem;
    text-align: center;
    border: none;
    color: #eeeeee;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 3rem;
        font-size: 0.9rem;
    }
`
