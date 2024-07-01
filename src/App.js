import { useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import RM from './img/rick-morty.png';
// import './index.css';


function App() {
  // generamos un useState para pasarle toda la informacion a un nuevo componente y que este pueda renderizar todos los datos.
  
  const [characters, setCharacters] = useState(null);

  // se le debe agregarle el termino asyncrona async para hacer peticiones de datos
  const reqApi = async () =>{
    // usamos await para el tiempo de espera y fecth para señakar la url
    const api = await fetch("https://rickandmortyapi.com/api/character");

    //ordenamos la informaicon de la api, extrae atributos de un objeto
    const characterApi = await api.json();

    // si se genera un status = 200 y protptype da Response, quiere decir que esta bien la conexion
    console.log(characterApi);

    setCharacters(characterApi.results);

  };

  // console.log(characters);
  // console.log(setCharacters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick and Morty</h1>

        {characters ? (
          <Characters characters = {characters} setCharacters = {setCharacters}/>
        ) : (
          <>
            {/* ingresamos la imagen como importacion,  definimos Classname para darle el stilo */}
            <img src={RM} alt = "Rick&Morty" className='img-home'></img>
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
        {/* Si characters tiene elementos los vamos a mostrar */}
             
      </header>
    </div>
  );
}

export default App;
