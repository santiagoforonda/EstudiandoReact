import React, { useState } from 'react'
import '../styles/login_register.css'
import LayoutLR from '../componentes/layout_login_register'
import {agregarUsuario, buscarUsuario } from '../backend/Usuarios'
import { useNavigate } from 'react-router-dom'


const Login_Register = () => {
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(true)
  const [loginData, setLoginData] = useState({ correo: '', password: '' })
  const [registerData, setRegisterData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    telefono: '',
    sexo: '',
    fecha: '',
  })
  const [error, setError] = useState('')

  const loginClick = () => {
    setShowLogin(true)
    setError('')
  }

  const registerClick = () => {
    setShowLogin(false)
    setError('')
  }

  const loginSubmit = (e) => {
    e.preventDefault()
    const { correo, password } = loginData
    if (buscarUsuario(correo, password)) {
      console.log('Usuario autenticado')
      navigate('/inicio')
    } else {
      setError('Credenciales incorrectas')
    }
  }

  const registerSubmit = (e) => {
    e.preventDefault()
    const { nombre, apellido, correo, password, telefono, sexo, fecha } = registerData
    if (nombre && apellido && correo && password && telefono && sexo && fecha) {
      agregarUsuario(nombre, apellido, correo, password, fecha, sexo, telefono)
      console.log('Usuario registrado exitosamente')
      loginClick()
    } else {
      setError('Todos los campos son obligatorios')
    }
  }

  const inputChange = (e, formType) => {
    const { name, value } = e.target
    if (formType === 'login') {
      setLoginData((prevData) => ({ ...prevData, [name]: value }))
    } else {
      setRegisterData((prevData) => ({ ...prevData, [name]: value }))
    }
  }

  return (
    <LayoutLR>
      <article className='login-register'>
        <h2 className='btn-select' onClick={loginClick}>
          INGRESO
        </h2>
        <h2 className='btn-select' onClick={registerClick}>
          REGISTRO
        </h2>
        <form className={`login ${showLogin ? '' : 'hidden'}`} onSubmit={loginSubmit}>
          <div className='campos-login'>
            <input
              type="email"
              placeholder='CORREO'
              required
              name="correo"
              value={loginData.correo}
              onChange={(e) => inputChange(e, 'login')}
            />
            <input
              type="password"
              placeholder='CONTRASEÑA'
              required
              name="password"
              value={loginData.password}
              onChange={(e) => inputChange(e, 'login')}
            />
            <button type="submit">INGRESAR</button>
          </div>
        </form>
        <form className={`register ${showLogin ? 'hidden' : ''}`} onSubmit={registerSubmit}>
          <div className='campos-register'>
            <input
              type="text"
              placeholder='NOMBRE'
              className='form-input'
              name="nombre"
              required
              value={registerData.nombre}
              onChange={(e) => inputChange(e, 'register')}
            />
            <input
              type="text"
              placeholder='APELLIDO'
              className='form-input'
              name="apellido"
              required
              value={registerData.apellido}
              onChange={(e) => inputChange(e, 'register')}
            />
            <input
              type="email"
              placeholder='CORREO'
              required
              className='form-input'
              name="correo"
              value={registerData.correo}
              onChange={(e) => inputChange(e, 'register')}
            />
            <input
              type="password"
              placeholder='CONTRASEÑA'
              required
              className='form-input'
              name="password"
              value={registerData.password}
              onChange={(e) => inputChange(e, 'register')}
            />
            <input
              type="tel"
              placeholder='TELEFONO'
              className='form-input'
              name="telefono"
              pattern="[0-9]{10}"
              title="Ingrese un número de teléfono válido"
              required
              value={registerData.telefono}
              onChange={(e) => inputChange(e, 'register')}
            />
            <select
              className='form-input'
              name="sexo"
              required
              value={registerData.sexo}
              onChange={(e) => inputChange(e, 'register')}
            >
              <option value="">-----Seleccione</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
            <input
              type="date"
              className='form-input'
              name="fecha"
              required
              value={registerData.fecha}
              onChange={(e) => inputChange(e, 'register')}
            />
            <button type="submit">REGISTRARSE</button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
      </article>
    </LayoutLR>
  )
}

export default Login_Register
