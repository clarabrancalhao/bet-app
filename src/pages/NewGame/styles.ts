import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 7rem auto;
  align-items: start;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
