import React from 'react';
import {
  Container,
  ContentContainer,
  Game,
  Infos,
  Marker,
  Numbers,
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
    <Container>
      <Marker color={props.color} />
      <ContentContainer>
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
      </ContentContainer>
    </Container>
  );
};

export default RecentGameCard;
