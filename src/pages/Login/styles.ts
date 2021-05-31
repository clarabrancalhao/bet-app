import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
`;

export const Container1 = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: max-content;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const TitleText = styled.h1`
  display: contents;
  font-size: 3.5rem;
  color: #707070;
`;

export const SignUpText = styled.h1`
  margin-top: 3rem;
  font-size: 3.5rem;
  color: #707070;
`;
