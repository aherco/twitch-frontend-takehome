import { Dispatch } from 'redux';
import { GlobalStateGetter } from 'ventura/state/global';
import { config } from 'ventura/globals';
import { GamesState } from 'ventura/state/games';
import { Game } from 'ventura/models/game';

// Fetch Games Started
export const FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export type FetchGamesStarted = {
  type: typeof FETCH_GAMES_STARTED;
};

function fetchGamesStarted(): FetchGamesStarted {
  return { type: FETCH_GAMES_STARTED };
}

// Fetch Games Succeeded
export const FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export type FetchGamesSucceeded = {
  type: typeof FETCH_GAMES_SUCCEEDED;
  payload: GamesState;
};

function fetchGamesSucceeded(payload: GamesState): FetchGamesSucceeded {
    return {
      type: FETCH_GAMES_SUCCEEDED,
      payload,
    };
}

// Fetch Games Failed
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export type FetchGamesFailed = {
  type: typeof FETCH_GAMES_FAILED;
  error: Error;
};

// pass in error for future hypothetical implementation of displaying 
// an error message somewhere other than an alert (not by me lol)
function fetchGamesFailed(error: Error): FetchGamesFailed {
    return { 
      type: FETCH_GAMES_FAILED,
      error,
    };
}

// Fetch Games Thunk
export function fetchGames() {
  return (dispatch: Dispatch<any>, _getState: GlobalStateGetter) => {
    dispatch(fetchGamesStarted());
    return fetch(config.gamesDataURL)
    
      .then(
        (response) => response.json(),
        (error) => { 
          alert(`Failed to load games:\n${error}`);
          dispatch(fetchGamesFailed(error)) 
        },
      )

      .then(
        (body) => dispatch(fetchGamesSucceeded({ games: body.data.sort((a: Game, b: Game) => a.Order - b.Order) })), // order by the Order value
        (error) => { 
          alert(`Failed to load games:\n${error}`);
          dispatch(fetchGamesFailed(error))
        },
      );
  };
}
