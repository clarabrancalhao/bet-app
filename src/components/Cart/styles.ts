import styled from 'styled-components';

export const Card = styled.div`
  width: 31.7rem;
  height: 44.4rem;
  border-radius: 1.4rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 3px 25px #00000014;

  @media (max-width: 1000px) {
    margin-top: 3.2rem;
  }
`;

export const ContentWrapper = styled.div`
  margin: 3.2rem 1.6rem 4.7rem 1.8rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const GamesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 24rem;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    background: transparent;
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bababa;
    border-radius: 100px;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
`;

export const BoldText = styled.h1`
  font-size: 2.4rem;
  color: #707070;
  width: auto;
`;

export const LightText = styled.h1`
  margin-left: 0.6rem;
  font-size: 2.4rem;
  color: #707070;
  font-weight: 300;
  font-style: normal;
  white-space: pre;
`;
