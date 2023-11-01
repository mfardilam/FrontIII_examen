import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import { formulario, inputs, contenedor, errorEstilo } from './Estilos.module.css'


function App() {
  const [user, setUser] = useState({
    nombre: '',
    cancionFavorita: ''
  })

  //Estados para mostrar información capturada y error
  const  [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handlerEnvio = (evento) =>{
    evento.preventDefault()
    if(user.nombre.trim().length < 3 || user.cancionFavorita.length < 6){
      setError(true)
      setShow(false)
    } else {
      setError(false)
      setShow(true)
    }
  }

  

  return (
  
    <div className={contenedor}>
      
      {!show &&
        <form className={formulario} onSubmit={handlerEnvio}>
          <div>
            <h1>Bienvenido!!</h1>
            <h3>En DH Music nos interesa tu gusto musical</h3>
            <h4>Cuentanos un poco de ti ♪</h4>
          </div>
          <label>Nombre</label>
          <input className={inputs} placeholder='Ingresa tú nombre' type="text" value={user.nombre} onChange={(event) => setUser({...user, nombre: event.target.value})}/>
          <label>Canción favorita 🎧</label>
          <input className={inputs} placeholder='Ingresa tú canción favorita' type="text" value={user.cancionFavorita} onChange={(event) => setUser({...user, cancionFavorita: event.target.value})}/>
          <button>Enviar</button>
        </form>}
      {show && <Card nombre={user.nombre} cancion={user.cancionFavorita}/>}
      {error && 
        <div className={errorEstilo}>
          <h4>Por favor chequea que la información sea correcta</h4>
          <h6>Recuerda que la canción a ingresar debe tener al menos 6 caracteres</h6>
        </div>}
    </div>
  )
}

export default App
