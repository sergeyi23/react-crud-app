const url = 'https://swapi.dev/api'

export const getPeople = async () => {
    const peopleResponse = await (await fetch(`${url}/people`)).json();

    return peopleResponse.results.map(({name, height, mass, gender, birth_year}) => ({
        name, height, mass, gender, birth_year
    }))
}

export const getPlanets = async () => {
    const planetsResponse = await (await fetch(`${url}/planets`)).json();

    return planetsResponse.results.map((
            {
                name,
                rotation_period,
                orbital_period,
                diameter,
                gravity,
                population
            }
        ) => (
            {
                name,
                rotation_period,
                orbital_period,
                diameter,
                gravity,
                population
            }
        )
    )
}

export const getStarships = async () => {
    const starshipsResponse = await (await fetch(`${url}/starships`)).json();

    return starshipsResponse.results.map((
            {
                name,
                model,
                manufacturer,
                cost_in_credits,
                length,
            }
        ) => (
            {
                name,
                model,
                manufacturer,
                cost_in_credits,
                length,
            }
        )
    )
}