import * as React from 'react';
import logo from './logo.svg';
import { GamesState } from 'ventura/state/games';
import { Game } from 'ventura/models/game';
import GameCard from '../game-card/game-card';

// COGGERS loading indicator :^)
const coggers = '/static/images/coggers.gif';

export interface PublicProps {
  // Define any props taken by List itself.
}

export interface ReduxStateProps {
  gamesState: GamesState;
  loading: number;
}

export interface ReduxDispatchProps {
  fetchGames: Function;
}

export interface State {
  input: string;
}

export interface GameList {
  timer: number;
}

type Props = PublicProps & ReduxStateProps & ReduxDispatchProps;

export class GameList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { input: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
  }

  componentDidMount() {
    this.props.fetchGames();

    // BONUS: reload data every 30 seconds  
    this.timer = setInterval(this.props.fetchGames, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ input: e.target.value });
  }

  // BONUS: search functionality
  searchFilter(game: Game) {
    // strip input and names of vowels and special characters to compare for similarity rather than exact matches
    const name = game.Name.replace(/[aeiou:-\s]/gi, '').toLowerCase();
    const slug = game.Slug.replace(/[aeiou:-\s]/gi, '').toLowerCase();
    const input = this.state.input.replace(/[aeiou:-\s]/gi, '').toLowerCase()
    return name.includes(input) || slug.toLowerCase().includes(input);
  }

  public render() {
    return (
      <div className="game-list__root">
        <figure>
          <img src={logo}/>
        </figure>

        <input
          id="search-bar__game-list"
          placeholder="Search for a game..."
          onChange={this.handleInputChange}
        />

        {this.props.loading > 0 ? <img id="coggers__game-list" src={coggers}/> : null}
        {
          this.props.gamesState.games
            .filter(this.searchFilter)
            .map(game => <GameCard key={game.ID} game={game}/>)
          }
      </div>
    );
  }
} 
