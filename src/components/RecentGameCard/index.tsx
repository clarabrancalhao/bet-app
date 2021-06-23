import React from 'react'
import { handleFormat } from '../../utils/handleFormat'
import { ICartGame } from '../../utils/interfaces'
import {
  ContentWrapper,
  Game,
  Infos,
  Marker,
  Numbers,
  RecentGameWrapper,
} from './styles'

interface IProps {
  game: ICartGame
}

const RecentGameCard: React.FC<IProps> = (props) => {
  const date = new Date(props.game.date)
  return (
    <RecentGameWrapper>
      <Marker color={props.game.color} />
      <ContentWrapper>
        <Numbers>{props.game.selectedNumbers.join(', ')}</Numbers>
        <Infos>
          {date.toLocaleDateString()} - ({handleFormat(props.game.price)})
        </Infos>
        <Game color={props.game.color}>{props.game.type}</Game>
      </ContentWrapper>
    </RecentGameWrapper>
  )
}

export default RecentGameCard
