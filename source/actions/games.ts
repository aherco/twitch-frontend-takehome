import { Dispatch } from 'redux';
import { GlobalStateGetter } from 'ventura/state/global';
import { config } from 'ventura/globals';
import { GamesState } from 'ventura/state/games';

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

    // Implement remainder of thunk
    return fetch(config.gamesDataURL)
    
      .then(
        (response) => response.json(),
        (error) => dispatch(fetchGamesFailed(error)),
      )

      .then(
        (body) => dispatch(fetchGamesSucceeded(body.data)),
        (error) => dispatch(fetchGamesFailed(error)),
      );
  };
}
