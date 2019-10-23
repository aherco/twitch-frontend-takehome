import {
    FETCH_GAMES_FAILED, FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED,
    FetchGamesFailed, FetchGamesStarted, FetchGamesSucceeded,
  } from 'ventura/actions/games';
  
  type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;
  
  export function loadingReducer(state: number = 0, action: Actions) {
    switch (action.type) {
      case FETCH_GAMES_STARTED:
        return state + 1;
  
      case FETCH_GAMES_FAILED:
        return state - 1;
        
      case FETCH_GAMES_SUCCEEDED:
        return state - 1;
    }
  
    return state;
  }
  