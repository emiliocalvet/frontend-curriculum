import React, { FormEvent, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { Slide, ToastContainer, toast } from 'react-toastify'

import { Context } from '../../context/AuthContext'

import Button from '../../components/Button'
import InputWithIcon from '../../components/InputWithIcon'
import BackgroundRightSide from '../../components/BackgroundRightSide'

import { Container, Content } from './styles'
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const history = useHistory()
  const auth = useContext(Context)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //Function that receive credentials to authenticate. 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    auth.signIn({ username, password }).then(() => {
      history.push('/adm')
    }).catch((error) => {
      if (error.response) {
        const data = error.response.data
        if (data.statusCode === 401) {
          toast.warn('Credencial inválida!')
        } else if (data.statusCode === 400) {
          toast.warn('A chave precisa ter no mínimo 6 caracteres!')
        } else {
          toast.error('Serviço indisponível!')
        }
      }
    })
  }

  return (
    <Container>
      <ToastContainer
        closeButton={false}
        position="top-right"
        autoClose={3000}
        transition={Slide}
        hideProgressBar={false}
      />
      <Content>
        <h1>Curriculum</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <InputWithIcon
            name="username"
            onChange={e => setUsername(e.target.value)}
            icon={FiUser}
            placeholder="Usuário"
          />
          <InputWithIcon
            name="password"
            onChange={e => setPassword(e.target.value)}
            icon={FiLock} type="password"
            placeholder="Senha"
          />
          {/* <Button type="submit" >Entrar</Button> */}
          <Button type="submit">Entrar</Button>
        </form>
        <Link to="/">cancelar</Link>
      </Content>
      <BackgroundRightSide />
    </Container>)
}

export default Login