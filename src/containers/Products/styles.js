import styled from 'styled-components';

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 75px);
  width: 100vw;
  
  
`;

export const ProductsImage = styled.img`
  width: 100%;
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
  }
`;

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-weight: ${(props) => props.isActiveCategory && 'bold'};
  border-bottom: ${(props) => props.isActiveCategory && '2px solid #F0C137'};
  color: ${(props) => (props.isActiveCategory ? '#F0C137' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 10px;
    margin-top: 10px;
    
  }
`;