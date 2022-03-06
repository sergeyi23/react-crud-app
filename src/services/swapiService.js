export const getPeople = async () => {
    const urlPeople = 'https://swapi.dev/api/people';
    const data = await (await fetch(urlPeople)).json();
    return data.results.map(({name, height, mass, gender, birth_year}) =>
        ({name, height, mass, gender, birth_year}));
}

export const getPlanets = async () => {
    const urlPlanets = 'https://swapi.dev/api/planets';
    const data = await (await fetch(urlPlanets)).json();
    return data.results.map(({name, rotation_period, orbital_period, diameter, climate}) =>
        ({name, rotation_period, orbital_period, diameter, climate}));
}

export const getStarships = async () => {
    const urlStarships = 'https://swapi.dev/api/starships';
    const data = await (await fetch(urlStarships)).json();
    return data.results.map(({name, model, cost_in_credits, length}) =>
        ({name, model, cost_in_credits, length}));
}