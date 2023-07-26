import styled from "styled-components";

import Background from "../../assets/fundo.jpg";

export const Container = styled.div`
  background: url("${Background}");
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LoginImage = styled.img`
  height: 10%;
`;

export const ContainerItens = styled.div`
  height: 80%;
  margin-top: -50px;
  background: #373737;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #ffffff;
    text-align: center;
    margin-top: 30px;
  }

  img {
    margin-left: 65px;
    width: 13.75rem;
}
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.87rem;
  color: #ffffff;
  margin-top: 1.75rem;
  margin-bottom: 0.31rem;
  margin-left: 10px;
`;

export const Input = styled.input`
  width: 20.464rem;
  height: 2.395rem;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 0.31rem;
  border: ${(props) => (props.error ? "0.12rem solid #CC1717" : "none")};

  margin-left: 10px; /* Ajuste o valor da margem direita conforme necessário */
  margin-right: 10px;
`;

export const ButtonLogin = styled.button`
  width: 11.426rem;
  height: 3rem;
  background: #F0C137;
  border-radius: 1.25rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  color: #ffffff;
  margin-left: 80px;
`;

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 0.87rem;
  line-height: 1rem;
  color: #ffffff;
  margin-left: 10px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ErrorYup = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.87rem;
  line-height: 1rem;

  color: #cc1717;
  margin-top: 0.12rem;
  margin-left: 10px;
`;
