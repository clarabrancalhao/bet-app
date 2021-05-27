import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.8rem;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

export const NumberCell = styled.button`
  border-radius: 50%;
  background: #adc0c4;
  width: 6.3rem;
  height: 6.3rem;
  font-size: 2rem;
  color: #ffffff;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0 1.2rem 1.2rem 0;

  &.active {
    background: ${({ color }) => color};
  }
`;
