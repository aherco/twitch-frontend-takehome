import { GamesState } from './games';

export interface GlobalState {
  games: GamesState;
  loading: number;
}

export interface GlobalStateGetter { 
  (): GlobalState;
}
