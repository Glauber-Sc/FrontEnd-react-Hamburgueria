import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #000;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    height: 80px;
    flex-direction: row;
    padding: 10px;
  }
`;

export const ContainerLeft = styled.div`
  
  width: 50%;
  gap: 10px;
  margin-left: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0;
  
    flex-direction: row;
    justify-content: center;
  }
`;

export const PageLink = styled.a`

  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#F0C137" : "#fff")};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  margin-left: 100px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    
    font-size: 17px;
    margin-left: 0;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerRight = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  gap: 10px;

  @media (max-width: 768px) {
    width: 45%;
    flex-direction: row;
  }
`;

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #fff;

 
`;

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: #f0c137;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
 

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 105px;

    @media (max-width: 768px) {
      font-size: 17px;
    }
  }

  div {
    margin-left: 8px;
  }
`;

export const ContainerAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #f0c137;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;

  margin-right: 16px;
`;

export const AdminLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #f0c137;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 0;
    margin-top: 5px;
  }
`;
