import * as React from 'react';
import { config } from 'ventura/globals';
import { Game } from 'ventura/models/game';
import './game-card.scss';
import { GameFile } from 'ventura/models/game-file';
import { CategorySection } from 'ventura/models/category-section';

export interface PublicProps {
    game: Game;
}

export interface PublicState {
    gameInfoVisible: boolean;
}

type Props = PublicProps
type State = PublicState

export default class GameCard extends React.Component<Props, State> {

    constructor(props: Props) {
      super(props);
      this.state = { gameInfoVisible: false };
      this.toggleGameInfo = this.toggleGameInfo.bind(this);
    }
  
    toggleGameInfo() {
      this.setState({ gameInfoVisible: !this.state.gameInfoVisible });
    }
  
    public render() {
      return (
        <div className="game-card__game-list" key={this.props.game.ID} onClick={this.toggleGameInfo}>
          <div>
            <img key={this.props.game.ID} src={config.gameIconURLTemplate(this.props.game.ID)}/>
            <div>
              <h2>{this.props.game.Name}</h2>
              <p>Addons {this.props.game.SupportsAddons ? '' : 'Not'} Supported</p>
              <p>Voice {this.props.game.SupportsVoice ? '' : 'Not'} Supported</p>
            </div>
          </div>

          <div className="game-info__game-card" style={this.state.gameInfoVisible ? {} : { display: 'none' }}>
              <div>
                <h4>Game Slug</h4>
                <p>{this.props.game.Slug}</p>
              </div>
              
              <div>
                <h4>Game Files</h4>
                <ul>
                    {
                        this.props.game.GameFiles.length > 0 ? 
                            this.props.game.GameFiles.map((file: GameFile) => <li key={file.Id}>{file.FileName}</li>) :
                            <li>None</li>
                    }
                </ul>
              </div>

              <div>
                <h4>Categories</h4>
                <ul>
                    {
                        this.props.game.CategorySections.length > 0 ? 
                            this.props.game.CategorySections.map((category: CategorySection) => <li key={category.ID}>{category.Name}</li>) :
                            <li>None</li>
                    }
                </ul>
              </div>
          </div>
        </div>
      );
    }
  } 