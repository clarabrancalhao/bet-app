import styled from 'styled-components';
import { HiOutlineArrowRight } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 5rem;
`;

export const Header = styled.div`
  white-space: pre;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Container3 = styled.div`
  align-items: center;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: #707070;
  width: fit-content;
  margin-right: 4.5rem;
`;

export const Text1 = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  width: fit-content;
  color: #868686;
  margin-right: 1.5rem;
  align-self: center;
`;

export const NewGameText = styled.h1`
  color: #b5c401;
  font-size: 2.4rem;
  display: flex;
  white-space: pre;
  width: fit-content;
  align-items: center;
`;

export const ArrowIcon = styled(HiOutlineArrowRight)`
  color: #b5c401;
`;
