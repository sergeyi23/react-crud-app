import { nanoid } from 'nanoid'
import Joi from 'joi'
const url = 'https://swapi.dev/api'

export const planetColumns = [
  'name',
  'surface_water',
  'population',
  'rotation_period',
  'diameter'
]

export const planetRule = Joi.object({
  name: Joi.string()
      .max(35)
      .required(),

  surface_water: Joi.number()
      .allow('unknown') 
      .required(),

  population: Joi.number()
      .allow('unknown') 
      .required(),

  rotation_period: Joi.number()
      .required(),

  diameter: Joi.number()
      .required(),
  id: Joi.string()
})

export const getPlanets = async () => {
  if(localStorage.getItem('planets')) {
    return JSON.parse(localStorage.getItem('planets'));
  }
  const planetResponse = await (await fetch(`${url}/planets`)).json();

  return  planetResponse.results.map(({name, surface_water, population, rotation_period, diameter}) => ({
      name, surface_water, population, rotation_period, diameter, id: nanoid()
  }))
} 