export const getPeople = async () => {
    if (localStorage.getItem("people-swapi")) {
        console.log("GET PEOPLE FROM LOCAL STORAGE")
        return JSON.parse(localStorage.getItem("people-swapi"))
    }
    const peopleResponse = await (await fetch('https://swapi.dev/api/people')).json();
    let result = peopleResponse.results.map(({name, height, mass, gender, birth_year}) => ({
        name,
        height,
        mass,
        gender,
        birth_year
    }))
    localStorage.setItem("people-swapi", JSON.stringify(result))
    return result
}