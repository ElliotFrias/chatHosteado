import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Home.css'

function Home() {
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUserName = userName
        localStorage.setItem('userName', newUserName)
        navigate('/chat')
    }

  return (
    <div className="generalConteinerHome">
      <h1>Chat mío de mí</h1>
      <form className="formHome" onSubmit={handleSubmit}>
        <p>Ingresa un nombre de usuario</p>
        <input type="text" required="required" onChange={(e) => setUserName(e.target.value)}></input>
        <button type="submit" className='btnIngresar'>Empieza a chatear</button>
      </form>
    </div>
  )
}

export default Home
