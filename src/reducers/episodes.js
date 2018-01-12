const episodes = (state = [], action) => {
  switch (action.type) {
    case 'SET_EPISODES':
      return action.episodes
    default:
      return state;
  }
}

export default episodes;
