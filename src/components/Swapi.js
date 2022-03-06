import { nanoid } from 'nanoid'
const url = 'https://swapi.dev/api'

export const getPeople = async () => {
  if(localStorage.getItem('people')) {
    return JSON.parse(localStorage.getItem('people'));
  }
  console.log('api people')
  const peopleResponse = await (await fetch(`${url}/people`)).json();

  return  peopleResponse.results.map(({name, height, mass, gender, birth_year}) => ({
      name, height, mass, gender, birth_year, id: nanoid()
  }))
}

export const getPlanets = async () => {
  if(localStorage.getItem('planets')) {
    return JSON.parse(localStorage.getItem('planets'));
  }
  console.log('api planets')
  const planetResponse = await (await fetch(`${url}/planets`)).json();

  return  planetResponse.results.map(({name, surface_water, population, rotation_period, diameter}) => ({
      name, surface_water, population, rotation_period, diameter, id: nanoid()
  }))
}

export const getStarships = async () => {
  if(localStorage.getItem('starships')) {
    return JSON.parse(localStorage.getItem('starships'));
  }
  console.log('api starships')
  const starshipResponse = await (await fetch(`${url}/starships`)).json();

  return  starshipResponse.results.map(({name, model, cost_in_credits, length, passengers}) => ({
      name, model, cost_in_credits, length, passengers, id: nanoid()
  }))
}