import { nanoid } from 'nanoid'
import Joi from 'joi'
const url = 'https://swapi.dev/api'

export const personColumns = [
  'name',
  'height',
  'mass',
  'gender',
  'birth_year',
]

export const personRule = Joi.object({
  name: Joi.string()
      .max(35)
      .required(),

  height: Joi.number()
      .required(),

  mass: Joi.number()
      .required(),

  gender: Joi.string()
      .required(),

  birth_year: Joi.string()
      .required(),
  id: Joi.string()
})

export const getPeople = async () => {
  if(localStorage.getItem('people')) {
    return JSON.parse(localStorage.getItem('people'));
  }
  const peopleResponse = await (await fetch(`${url}/people`)).json();

  return  peopleResponse.results.map(({name, height, mass, gender, birth_year}) => ({
      name, height, mass, gender, birth_year, id: nanoid()
  }))
}