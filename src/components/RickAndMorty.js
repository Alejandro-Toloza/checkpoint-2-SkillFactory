import React, {useState, useEffect} from 'react';

const RickAndMorty = () => {

    const url = 'https://rickandmortyapi.com/api/character';
    const [characters, setTodos] = useState()
    const fetchApi = async() => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setTodos(responseJSON)
    }    
  
    useEffect(() => {
      fetchApi()
    }, []);

    return (
        <div className='RickAndMorty'>
        RickAndMorty
        <ul>
          { !characters ? 'Cargando...' :
            characters.map((character,index)=>{
              return <li>
                {character.id}, {character.name}
              </li>
            })
          }
        </ul>
      </div>

    );
}

export default RickAndMorty;