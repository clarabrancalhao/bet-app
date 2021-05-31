import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 1.8rem;
  display: grid;
  grid-template-columns: repeat(9, 1fr);

  @media (max-width: 1300px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;
