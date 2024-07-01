const Characters = (props) =>{
  const {characters, setCharacters } = props;
  // console.log(characters);
  const resetCharacters = () =>{
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver a home</span>

      <div className="container-characters">
        {characters.map((character, index) =>(
          // return implicito
          <div className="character-container" key ={index}>
            {/* <p>{character.name}</p> */}

            <div>
              {/* alt sirve para mostrar la descripcion de la imagen si esta no puede ser mostrada*/}
              <img src={character.image} alt={character.name}/>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === 'Alive' ? (
                  <>
                    <span className="alive"/>
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead"/>
                    Dead 
                  </>
                )}
              </h6>
              <p> 
                <span className="text-grey">Espisodios: </span>
                <span>{character.episode.length}</span>  
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>

          </div> 
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver al home</span>
    </div>
  );
}
export default Characters;