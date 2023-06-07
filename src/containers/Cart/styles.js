import styled from 'styled-components'

export const Container = styled.div`
    background: #e5e5e5;
    min-height: calc(100vh - 75px);]]
    
`

export const CartImage = styled.img`
    width: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    padding-bottom: 30px;

      background: #e5e5e5;
   
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    margin-top: 20px;

    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 25px;
    }
`
