import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';

function App() {
  let [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    
    const onScreenLoad = async () => {
      //setPokemonData("a")
      let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
      .then((response) => {
          if (response.status !== 200){
              alert("Something Went Wrong!");
              return;
          }
          response.json().then(data => {setPokemonData(data.results)});

        }
      );

      await response;
    }

    onScreenLoad();

  }, [])

  console.log(pokemonData.length)
  if (pokemonData.length > 1){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <li>
          {pokemonData?.map(i => <ul>{i.name}</ul>)}
        </li>
  
      </div>
    );
  }else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Waiting for data
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  
      </div>
    );
  }
  
}

export default App;
