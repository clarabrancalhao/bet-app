import styled from 'styled-components';

export const GameDetailWrapper = styled.div`
  display: flex;
  margin-left: 1.2rem;
  flex-direction: column;
  padding-right: 1.6rem;
`;

export const InfosWrapper = styled.div`
  margin-top: 0.6rem;
  display: flex;
`;

export const Marker = styled.div`
  height: 100%;
  width: 0.4rem;
  border-radius: 1rem 0 0 1rem;
  background: ${({ color }) => color};
`;

export const GameCard = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;

export const NumbersText = styled.p`
  font-size: 1.5rem;
  color: #868686;
`;

export const LightParagraph = styled.p`
  color: #868686;
  font-weight: 400;
  font-size: 1.6rem;
  font-style: normal;
`;

export const GameTitle = styled.p`
  color: ${({ color }) => color};
  font-size: 1.6rem;
`;
