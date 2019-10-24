import {
  FETCH_GAMES_FAILED, FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED,
  FetchGamesFailed, FetchGamesStarted, FetchGamesSucceeded,
} from 'ventura/actions/games';
import { GamesState } from 'ventura/state/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;

const initialState: GamesState = {
  games: [],
};

export function gamesReducer(state: GamesState = initialState, action: Actions) {
  switch (action.type) {
    case FETCH_GAMES_STARTED:
      return state;

    case FETCH_GAMES_FAILED:
      // clear the state rather than leaving it, in the case that the developers
      // intend on making the data unavailable
      return initialState;
      
    case FETCH_GAMES_SUCCEEDED:
      return action.payload;
  }

  return state;
}
