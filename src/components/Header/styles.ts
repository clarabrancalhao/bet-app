import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  border: 2px solid #ebebeb;
  display: flex;
  justify-content: center;
`;

export const Container2 = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const TitleContainer = styled.div`
  padding-top: 15px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: auto;
`;

export const Marker = styled.div`
  width: 10.7rem;
  height: 0.7rem;
  border-radius: 0.6rem;
  background: #b5c401;
`;

export const Title = styled.h1`
  width: auto;
  font-size: 4.4rem;
  color: #707070;
  text-align: center;
`;

export const Text = styled.h2`
  font-size: 2rem;
  color: #707070;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  margin: 0 3rem;
`;
