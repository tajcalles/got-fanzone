import axios from 'axios';
import { setFlash } from './flash';

const setEpisodes = (episodes) => {
  return { type: 'SET_EPISODES', episodes: episodes }
}

export const fetchEpisodes = () => {
  return dispatch => {
    axios.get(`https://api.got.show/api/episodes/`)
      .then(res => {
        dispatch(setEpisodes(res.data))
        console.log(res.data)
      })
      .catch(err => {
        dispatch(setFlash('Error fetching episodes.', 'red', 'inverted'))
        console.log(err)
      });
  }
}
