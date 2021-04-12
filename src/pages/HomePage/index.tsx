import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { RiAdminLine } from 'react-icons/ri'

import Button from '../../components/Button'
import BackgroundRightSide from '../../components/BackgroundRightSide'

import { Container, Content } from './style'

const HomePage: React.FC = () => {
  const history = useHistory()

  return (
    <Container>
      <Content>
        <h1>Curriculum</h1>

        <div>
          <Button type="button" onClick={() => history.push('/register')}>Cadastrar Currículo</Button>
          <Button type="button" onClick={() => history.push('/find')}>Acessar Currículo</Button>
        </div>

        <Link to="/login"><RiAdminLine size={25} color="#ff9000" /></Link>
      </Content>
      <BackgroundRightSide />
    </Container>
  )
}

export default HomePage