import { Dispatch } from 'redux';
import { GlobalStateGetter } from 'ventura/state/global';

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
};

// function fetchGamesSucceeded(): FetchGamesSucceeded {
//     return { type: FETCH_GAMES_SUCCEEDED };
// }

// Fetch Games Failed
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export type FetchGamesFailed = {
  type: typeof FETCH_GAMES_FAILED;
};

// function fetchGamesFailed(): FetchGamesFailed {
//     return { type: FETCH_GAMES_FAILED };
// }

// Fetch Games Thunk
export function fetchGames() {
  return (dispatch: Dispatch<any>, _getState: GlobalStateGetter) => {
    dispatch(fetchGamesStarted());

    // Implement remainder of thunk
  };
}
