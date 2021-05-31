import React from 'react';
import {
  ContentWrapper,
  Game,
  Infos,
  Marker,
  Numbers,
  RecentGameWrapper,
} from './styles';

interface IProps {
  date: number;
  color: string;
  type: string;
  price: number;
  numbers: number[];
}

const RecentGameCard: React.FC<IProps> = (props) => {
  return (
    <RecentGameWrapper>
      <Marker color={props.color} />
      <ContentWrapper>
        <Numbers>{props.numbers.join(', ')}</Numbers>
        <Infos>
          {new Date(props.date).toLocaleDateString()} - (
          {props.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
          )
        </Infos>
        <Game color={props.color}>{props.type}</Game>
      </ContentWrapper>
    </RecentGameWrapper>
  );
};

export default RecentGameCard;
