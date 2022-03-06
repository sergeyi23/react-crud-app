export const getPlanets = async () => {
    if (localStorage.getItem("planets-swapi")) {
        console.log("GET PLANETS FROM LOCAL STORAGE")
        return JSON.parse(localStorage.getItem("planets-swapi"))
    }
    const planetsResponse = await (await fetch('https://swapi.dev/api/planets')).json();

    let result = planetsResponse.results.map(({name, climate, terrain, surface_water, population}) => ({
        name,
        climate,
        terrain,
        surface_water,
        population
    }))
    localStorage.setItem("planets-swapi", JSON.stringify(result))
    return result
}