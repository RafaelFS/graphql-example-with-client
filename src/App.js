import React from 'react';
import './CharacterCard.css';
import './App.css';

const characters = [
  {
    name: 'Rick',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    name: 'Morty',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }
]

function App() {
  return (
    <div className="App">
      <CharacterList characters={characters}/>
    </div>
  );
}

export function CharacterList(props) {
  const characters = props.characters;
  const cardStyle = {
    marginTop: "50px",
    marginRight: "15px"
  }
  const gridStyle = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  }
  const listCharacters = characters.map(character =>
    <div key={character.id} style={cardStyle}>
      <CharacterCard style={cardStyle} character={character}/>
    </div>
  );
  return (
    <div style={gridStyle}>{listCharacters}</div>
  );
}

function CharacterCard(props) {
  let { name, image, species} = props.character;
  return (
    <div className="card">
      <img src={image} alt="Avatar" className="card__img" />
      <div className="card__container">
        <h4>{name}</h4>
        <p>{species}</p>
      </div>
    </div>
  );
}

export default App;
