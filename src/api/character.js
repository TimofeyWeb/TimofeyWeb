import client from './client'

export const getCharacters = async (page, name = '', status = null) => {
  const params = { page }
  if (name !== '') {
    params.name = name;
  }
  if (status !== null) {
    params.status = status;
  }
  const response = await client.get(`/character/`, {
    params,
  })
  const {info, results} = response.data
  return { info, results }
}

export const getCharacterById = async (id) => {
  const response = await client.get(`/character/`, {
    id,
  })
 const { results } = response.data
  return { results } 
}