import React, { useState, useEFFect } from 'react';
import User from "./components/user";


const BASE_URL = 'http://localhost:8000/'

const App = () => {
  const[users, setUsers] = useState([])

  useEFFect(() => {
    fetch(BASE_URL + 'user/all')
      .then(response => {
        const json = response.json()
        console.log(json);
        if (response.ok) {
          return json
        }
        throw response
      })
      .then(data => {
        return data.reverse()
      })
      .then(data => {
        setUsers(data)
      })
      .catch(error => {
        console.log(error);
        alert(error)
      })
  }, [])

  return (
    <>
     <h1 class= "title is-1 has-text-centered">Colorifix</h1>
      <div className="columns"></div>

      <div className="column"></div>
      <div className="column m-5 is-two-thirds">
        {
          users.map(user => (
            user={user} 
          ))
        }
       </div> 
    </>  
  );
}

export default App;