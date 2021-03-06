import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin-top: 2rem;
  height: 100%;
  margin-bottom: 3.6rem;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
