import React, { useState, useEffect } from 'react'
import { getCollection } from '../firebase-config/firebase'

const Contact = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const usersCollection = async () => {
      const collection = await getCollection('users');
      setUsers(collection);
    }

    usersCollection();
  }, [])

  
  return (
    <div className='users-box'>
      {users.map((user) => {
        return <div className='user-box' key={user.id} >
          {/* <div className="icon">
            {auth.currentUser && user.id === auth.currentUser.uid && <TiDeleteOutline onClick={deleteUser} />}
          </div> */}
          <h1>{user.displayName}</h1>
          Email : {user.email}<br />
          Data : {user.Data.seconds}
        </div>
      })}
    </div>
  )
}

export default Contact