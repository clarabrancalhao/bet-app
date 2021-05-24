import styled from 'styled-components';

interface ButtonProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: #707070;
  width: fit-content;
  margin-right: 4.5rem;
`;

export const Text1 = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  width: fit-content;
  color: #868686;
  margin-right: 1.5rem;
`;
