export const getStarships = async () => {
    if (localStorage.getItem("starships-swapi")) {
        console.log("GET STARSHIPS FROM LOCAL STORAGE")
        return JSON.parse(localStorage.getItem("starships-swapi"))
    }
    const peopleResponse = await (await fetch('https://swapi.dev/api/starships')).json();

    let result = peopleResponse.results.map(({name, model, manufacturer, cost_in_credits, starship_class}) => ({
        name,
        model,
        manufacturer,
        cost_in_credits,
        starship_class
    }))
    localStorage.setItem("starships-swapi", JSON.stringify(result))
    return result
}