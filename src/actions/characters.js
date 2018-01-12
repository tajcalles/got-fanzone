import axios from 'axios';
import { setFlash } from './flash';

const setCharacters = (characters) => {
  return { type: 'SET_CHARACTERS', characters: characters }
}

export const fetchCharacters = () => {
  return dispatch => {
    axios.get(`https://api.got.show/api/characters/locations`)
      .then(res => {
        dispatch(setCharacters(res.data))
        console.log(res.data)
      })
      .catch(err => {
        dispatch(setFlash('Error fetching characters.', 'red', 'inverted'))
        console.log(err)
      });
  }
}


