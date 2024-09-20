import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

const {user} = useContext(UserContext)

// conditional rendering 

if(!user) return <h1>not logged in </h1>

  return (
    <div>Profile : {user.username} 
      <h1>more components</h1>
    </div>
  )
}

export default Profile