export interface CategorySection {
    ID: number;
    GameID: number;
    InitialInclusionPattern: string;
    Name: string;
    PackageType: number;
    Path: string;

    // I'm assuming this is a string because the other pattern is a string.
    ExtraIncludePattern: string;
}