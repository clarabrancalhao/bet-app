import styled from 'styled-components';

export const RecentGameWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Marker = styled.div`
  height: 9.4rem;
  width: 0.6rem;
  background: ${({ color }) => color};
  border-radius: 10rem;
  margin-right: 1.5rem;
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
