import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 2.6rem;
  width: 31.7rem;
  height: 44.4.rem;
  border-radius: 1.4rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 3px 25px #00000014;
`;

export const Content = styled.div`
  margin: 3.2rem 1.6rem 4.7rem 1.8rem;
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  display: flex;
`;

export const BoldText = styled.h1`
  font-size: 2.4rem;
  color: #707070;
`;

export const LightText = styled.h1`
  font-size: 2.4rem;
  color: #707070;
  font-weight: 300;
  font-style: normal;
`;

export const SaveButton = styled.button`
  width: 100%;
  background: #f4f4f4;
  border: 1px solid #e2e2e2;
  color: #27c383;
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2.7rem;
`;
