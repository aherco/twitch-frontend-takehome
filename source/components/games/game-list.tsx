import * as React from 'react';
import logo from './logo.svg';
import { GamesState } from 'ventura/state/games';

export interface PublicProps {
  // Define any props taken by List itself.
}

export interface ReduxStateProps {
  // Define any props mapped from redux state here.
  games: GamesState,
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
    return (
      <div className="game-list__root">
        <figure>
          <img src={logo} />
        </figure>
        <h1>Twitch React Test</h1>
        <p>This is the GameList component, located in <code>~/source/components/games/game-list.tsx</code></p>
        <p>Start your implementation here.</p>
      </div>
    );
  }
} 
