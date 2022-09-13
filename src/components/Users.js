import React, {useState, useEffect} from 'react';


const Users = () => {

  const url = 'https://jsonplaceholder.typicode.com/users';
  const [users, setTodos] = useState()
  const fetchApi = async() => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }    

  useEffect(() => {
    fetchApi()
  }, []);

    return( 
        <div className='Users'>
          Users
          <ul>
            { !users ? 'Cargando...' :
              users.map((user,index)=>{
                return <li>{user.id}, {user.name}, {user.email}, {user.phone}, {user.address.city}, {user.company.name}</li>
              })
            }
          </ul>
        </div>
    );
}

export default Users;