import React, { FormEvent, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiUser, FiLock} from 'react-icons/fi'

import InputWithIcon from '../../components/InputWithIcon'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SignIn: React.FC = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //Function that sends credentials and receive token to put on storage of browser. 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    //Implement here the function to add the token in the browser storage.
    alert(`Username: ${username} - Password: ${password}`)
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
          <Button type="button" onClick={() => history.push('/adm')} >Entrar</Button>
        </form>
        <Link to="/">cancelar</Link>
      </Content>
      <Background />
    </Container>)
}

export default SignIn