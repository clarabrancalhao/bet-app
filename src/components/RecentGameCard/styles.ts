import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Marker = styled.div`
  height: 9.4rem;
  width: 0.6rem;
  background: ${({ color }) => color};
  border-radius: 10rem;
`;

export const Numbers = styled.h2`
  font-size: 2rem;
  color: #868686;
`;

export const Infos = styled.h3`
  color: #868686;
  font-size: 1.7rem;
  font-weight: 400;
  font-style: normal;
`;

export const Game = styled.h2`
  font-size: 2rem;
  color: ${({ color }) => color};
`;
