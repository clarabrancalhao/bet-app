import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 10rem;
  border: 2px solid ${({ color }) => color};
  color: ${({ color }) => color};
  font-size: 1.4rem;
  width: fit-content;
  padding: 0.9rem 2.9rem;
  width: fit-content;
  background: #ffffff;
  margin-right: 2.2rem;

  &.active {
    background: ${({ color }) => color};
    color: #ffffff;
  }
`;
