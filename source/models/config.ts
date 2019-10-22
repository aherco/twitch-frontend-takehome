export class Config {
  readonly gamesDataURL = '/static/games.json';

  gameIconURLTemplate(gameID: number) {
    return `/static/assets/${gameID}.png`;
  }
}
