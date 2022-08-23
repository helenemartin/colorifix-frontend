import React, { useState, useEffect } from 'react'


const BASE_URL = 'http://localhost:8000/'

function User() {
  const[user, setUser] = useState("");

  useEffect(() => {
    setUser(BASE_URL + user.all)
  }, [])

  

    fetch(BASE_URL + 'user/' + user.id, requestOptions)
      .then(response => {
        if (response.ok) {
          window.location.reload()
        }
        throw response
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <>
    
        <div className='post_title'>{user.username}</div>
        <div className='post_creator'>{user.company.name}</div>
        <div className='post_text'>{user.permission}</div>
    
    </>
  )



export default User