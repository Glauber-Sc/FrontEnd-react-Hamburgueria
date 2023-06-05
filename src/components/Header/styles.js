import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  height: 72px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 10px;
  }
`;

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: #9758a6;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const ContainerAdmin = styled.div``;

export const AdminLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #9758a6;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  visibility: ${props => (props.adminActive ? 'visible' : 'hidden')};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-left: 50px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 0;
  }
`;