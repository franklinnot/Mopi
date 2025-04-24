
export interface ISource{
    website: string,
    url: string,
}

export interface ISong{
    title: string,
    artist: string,
    state: string,
    sources: ISource[],
}