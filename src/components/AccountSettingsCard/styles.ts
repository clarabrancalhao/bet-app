import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  width: 40%;
  height: 50rem;
  border-radius: 1.4rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 25px #00000014;
  padding: 2.4rem;
`;

export const Title = styled.h1`
  color: #868686;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 0.8rem;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #868686;
  height: 2.4rem;
  margin-top: 0.8rem;
  font-size: 1.4rem;
  padding-left: 1.2rem;
`;

export const Label = styled.label`
  text-align: center;
  color: #868686;
  font-size: 1.4rem;
  margin-top: 0.8rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.8rem;
  width: 70%;
`;
