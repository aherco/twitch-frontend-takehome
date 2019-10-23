import * as React from 'react';
import logo from './logo.svg';
import { GamesState } from 'ventura/state/games';
import GameCard from '../game-card/game-card';


export interface PublicProps {
  // Define any props taken by List itself.
}

export interface ReduxStateProps {
  // Define any props mapped from redux state here.
  gamesState: GamesState,
}

export interface ReduxDispatchProps {
  // Define any props used to dispatch redux actions here.
  fetchGames: Function,
}

type Props = PublicProps & ReduxStateProps & ReduxDispatchProps;

export class GameList extends React.Component<Props> {

  componentDidMount() {
    this.props.fetchGames();
  }

  public render() {
    console.log(this.props.gamesState);
    return (
      <div className="game-list__root">
        <figure>
          <img src={logo} />
        </figure>
        {this.props.gamesState.games.map(game => <GameCard key={game.ID} game={game}/>)}
      </div>
    );
  }
} 
