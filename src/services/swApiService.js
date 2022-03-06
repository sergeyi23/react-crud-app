const url = 'https://swapi.dev/api'

export const getPeople = async () => {
    const peopleResponse = await (await fetch(`${url}/people`)).json();

    return  peopleResponse.results.map(({name, height, mass, gender, birth_year, id}, index) => ({
        name, height, mass, gender, birth_year, id : index
    }))
}
export const getPlanets = async () => {
    const planetsResponse = await (await fetch(`${url}/planets`)).json();

    return  planetsResponse.results.map(({name, climate, population, diameter, gravity}, index) => ({
        name, climate, population, diameter, gravity, id : index
    }))
}
export const getStarships = async () => {
    const starshipsResponse = await (await fetch(`${url}/starships`)).json();

    return  starshipsResponse.results.map(({name, starship_class, passengers, length, consumables, id}, index) => ({
        name, starship_class, passengers, length, consumables, id : index
    }))
}