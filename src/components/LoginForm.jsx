import axios from "axios";
import { useState } from "react";

const LoginForm = () => {   
    const [username, setUserName]= useState('')
    const [password, setPassword]= useState('')
    const [error, setError]= useState('')

    const handleSubmit= async (e) => {
        e.preventDefault()
        const authObject= {'Project-ID': "d1e27ad4-3620-475a-9977-6b48a51b44e1", 'User-Name': username, 'User-Secret': password}
        try{
          await axios.get('https://api.chatengine.io/chats', {headers: authObject})
        
          localStorage.setItem('username', username)
          localStorage.setItem('password', password)
          window.location.reload()

        } catch(error){
            setError('oops, incorrect username or password')
        }
    }

return(
    <div className="wrapper">
        <div className="form">
            <h1 className="title">QChat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
                <div align="center">
                    <button className="button" type="submit">
                        <span>Start Chatting------</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>

        </div>
    </div>
)

}
export default LoginForm