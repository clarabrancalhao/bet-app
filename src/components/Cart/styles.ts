import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 2.6rem;
  width: 31.7rem;
  border-radius: 1.4rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 25px #00000014;
`;

export const GameCard = styled.div`
  display: flex;
`;

export const GameInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameDetailContainer = styled.div`
  display: flex;
`;

export const Marker = styled.div`
  height: 8.6rem;
  width: 0.4rem;
  border-radius: 50% 0 0 50%;
`;

export const BoldText = styled.h1`
  font-size: 2.4rem;
  color: #707070;
`;

export const NumbersText = styled.p`
  font-size: 1.5rem;
  color: #868686;
`;

export const GameTitle = styled.p`
  color: ${({ color }) => color};
  font-size: 1.6rem;
`;

export const LightParagraph = styled.p`
  color: #868686;
  font-weight: 400;
  font-size: 1.6rem;
  font-style: normal;
`;
