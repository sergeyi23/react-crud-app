import { nanoid } from 'nanoid'
import Joi from 'joi'
const url = 'https://swapi.dev/api'

export const starshipColumns = [
  'name',
  'model',
  'cost_in_credits',
  'length',
  'passengers'
]

export const starshipRule = Joi.object({
  name: Joi.string()
      .max(35)
      .required(),

  model: Joi.string()
      .max(35)
      .required(),

  cost_in_credits: Joi.number()
      .allow('unknown') 
      .required(),

  length: Joi.string()
      .pattern(/^[0-9]*[.,]?[0-9]+$/, 'numbers')
      .required(),

  passengers: Joi.string()
      .pattern(/^[0-9]*[.,]?[0-9]+$/, 'numbers')
      .allow('n/a') 
      .required(),
  beloved: Joi.boolean(),
  id: Joi.string()
})

export const getStarships = async () => {
  if(localStorage.getItem('starships')) {
    return JSON.parse(localStorage.getItem('starships'));
  }
  const starshipResponse = await (await fetch(`${url}/starships`)).json();

  return  starshipResponse.results.map(({name, model, cost_in_credits, length, passengers}) => ({
    name, model, cost_in_credits, length, passengers, beloved: false, id: nanoid()
  }))
} 