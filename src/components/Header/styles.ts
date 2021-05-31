import styled from 'styled-components';
import { HiOutlineArrowRight } from 'react-icons/hi';

export const Container = styled.header`
  width: 100%;
  border: 2px solid #ebebeb;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  white-space: pre;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  padding-top: 15px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  width: auto;
`;

export const Marker = styled.div`
  width: 10.7rem;
  height: 0.7rem;
  border-radius: 0.6rem;
  background: #b5c401;
`;

export const Title = styled.h1`
  width: auto;
  font-size: 4.4rem;
  color: #707070;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 2rem;
  color: #707070;
  width: auto;
  margin-left: 3rem;
  margin-right: 2rem;

  &.home-page {
    margin-left: 4rem;
  }
`;

export const ArrowIcon = styled(HiOutlineArrowRight)`
  color: #b5c401;
  size: 48px;
  width: 48px;
`;
