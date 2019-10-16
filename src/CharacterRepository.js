function getCharacters() {
  return fetch("https://rickandmortyapi.com/api/character/").then(response => {
    return response.json().then(responseJson => responseJson.results);
  });
}

const CharacterRepository = {
  getCharacters: getCharacters
};

export default CharacterRepository;
