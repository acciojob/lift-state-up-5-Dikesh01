
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [user, setUser] = useState([])
  const [success, setSuccess] = useState('')

  function logginIn(){
    if(user.length !== 0)
    setSuccess('You are logged in!')
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>

        {success && <p>{success}</p>}
        
           { success==='' &&
             <div>
              Username: <input type="text" onChange={(e)=>setUser([...user, {name:e.target.value}])}/>
              <br />
              <br />
              Password: <input type="password" onChange={(e)=>setUser([...user, {password:e.target.value}])}/>
              <br />
              <br />
              <button onClick={logginIn}>Log in</button>
             </div>
            }
        
    </div>
  )
}

export default App
