import { GameFile } from 'ventura/models/game-file';
import { CategorySection } from 'ventura/models/category-section';

export interface Game {
    ID: number;
    Name: string;
    SupportsAddons: boolean;
    SupportsVoice: boolean;
    Order: number;
    Slug: string;
    GameFiles: GameFile[];
    CategorySections: CategorySection[];
}

