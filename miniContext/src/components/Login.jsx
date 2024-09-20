import React , {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    // extract only limited data
    const {setUser} = useContext (UserContext)

    const handleSubmit = (e) =>{
      //handling them
      e.preventDefault()
      setUser({username,password})
    }
  return (
    <div>
    <h2>login</h2>
    <input 
    type='text'
    value={username}
    onChange={(e)=> setUsername(e.target.value)}
    placeholder='Username'
    />
    {""}
    <input
type='pasword'
value={password}
onChange={(e)=> setPassword(e.target.value)}
placeholder='Password'
/>
<button
onClick={handleSubmit}
>
    
    Submit</button>
    </div>
  )
}

export default Login