import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 3.3rem;
`;

export const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 7rem auto;
`;

export const SelectButtonsContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 3.6rem;
  display: flex;
`;

export const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

export const NewBetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const BottomButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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

  &.active {
    background: ${({ color }) => color};
  }
`;

export const BoldTitle = styled.h1`
  font-size: 2.4rem;
  color: #707070;
  width: auto;
`;

export const LightTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 300;
  color: #707070;
  width: auto;
`;

export const BoldParagraph = styled.p`
  font-size: 1.7rem;
  color: #868686;
`;

export const RegularParagraph = styled.p`
  margin-top: 0.6rem;
  font-size: 1.7rem;
  color: #868686;
  font-weight: 400;
`;

export const GameButtons = styled.button`
  border: 1px solid #27c383;
  border-radius: 1rem;
  padding: 1.7rem 2.2rem;
  color: #27c383;
  font-size: 1.6rem;
`;

export const AddCartButton = styled.button`
  background: #27c383;
  border: none;
  border-radius: 1rem;
  color: #ffffff;
  font-size: 1.6rem;
  padding: 1.7rem 2.2rem;
`;
