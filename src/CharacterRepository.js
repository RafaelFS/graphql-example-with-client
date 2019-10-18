import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

function getCharacters() {
  return client
    .query({
      query: gql`
        {
          characters {
            results {
              name
              id
              species
              image
            }
          }
        }
      `
    })
    .then(response => response.data.characters.results);
}

const CharacterRepository = {
  getCharacters: getCharacters
};

export default CharacterRepository;
