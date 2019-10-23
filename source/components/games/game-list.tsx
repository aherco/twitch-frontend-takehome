import * as React from 'react';
import logo from './logo.svg';
import '../../assets/images/1.png';
import { GamesState } from 'ventura/state/games';
import { config } from 'ventura/globals';
import { Game } from 'ventura/models/game';

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

  gameCard(game: Game) {
    return (
      <div className="game-card__game-list" key={game.ID}>
        <div>
          <img key={game.ID} src={config.gameIconURLTemplate(game.ID)}/>
          <div>
            <h2>{game.Name}</h2>
            <p>Addons {game.SupportsAddons ? 'Supported' : 'Not Supported'}</p>
            <p>Voice {game.SupportsVoice ? 'Supported' : 'Not Supported'}</p>
          </div>
        </div>
      </div>
    );
  }

  public render() {
    console.log(this.props.gamesState);
    return (
      <div className="game-list__root">
        <figure>
          <img src={logo} />
        </figure>

        {this.props.gamesState.games.map(game => this.gameCard(game))}
      </div>
    );
  }
} 
