

export default async function searchCharacters(name: string, status: string, page: number) {
    if (status !== 'alive' && status !== 'dead') {
        status = '';
    }
    
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&page=${page}`);
    const json = await res.json();
    

    const results = json.results;
    const cards = results.map(async (res: FetchedRes)  => {
        const episode = res.episode[0];
        const result = await fetch(episode);
        const json = await result.json();
        const episodeName = json.name;
        return {name: res.name, species: res.species, url: res.image, status: res.status, loc: res.location.name, firstSeen: episodeName};
    
});
return Promise.all(cards);
}
export async function counter(name: string, status: string) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`);
    const json = await res.json();
    const pages = json.info.count;
    const totalPages = Math.ceil(pages / 20);
    return totalPages;
}
type FetchedRes = {
    name: string,
    status: string,
    species: string,
    location: {name: string, url: string},
    episode: string[],
    image: string
};
