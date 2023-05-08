import React, { FormEvent, useContext, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiUser, FiLock} from 'react-icons/fi'

import Button from '../../components/Button'
import InputWithIcon from '../../components/InputWithIcon'
import BackgroundRightSide from '../../components/BackgroundRightSide'

import { Container, Content} from './styles'
import { Context } from '../../context/AuthContext'

const Login: React.FC = () => {
  const history = useHistory()
  const auth = useContext(Context)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //Function that sends credentials and receive token to put on storage of browser. 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await auth.signIn({username, password})
    history.push('/adm')
  }

  return (
    <Container>
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
          <Button type="button" onClick={handleSubmit} >Entrar</Button>
        </form>
        <Link to="/">cancelar</Link>
      </Content>
      <BackgroundRightSide />
    </Container>)
}

export default Login