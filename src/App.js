import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function useFetchCharacter(id) {
  const [character, setCharacter] = useState('');
  useEffect(() => {
    const fetchCharacter = (id) => 
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(character => {
      console.log(character);
      setCharacter(character.name);
    });
    fetchCharacter(id);
  }, [id]);
  return character;
}
function Character({ id }) {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const character = useFetchCharacter(id);

  return (
    <div className="Character">
      <div>{character}</div>
    </div>
  );
}

function App() {
  const [id, setId] = useState(1);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="Character-names">
        <h1>
        <span>
        <Character id={id} />
        </span>
        </h1>
      
      </div>

      <button onClick={e => setId(id + 1)}>
       The Next Character
      
      </button>
      <button onClick={e => setId(id - 1)}>
        
        Previous Character
      </button>
    </div>
  );
};



export default App;
