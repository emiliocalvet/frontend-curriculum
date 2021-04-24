import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiKey } from 'react-icons/fi'
import { Slide, ToastContainer, toast } from 'react-toastify'

import api from '../../services/api'

import InputWithIcon from '../../components/InputWithIcon'
import Button from '../../components/Button'
import BackgroundRightSide from '../../components/BackgroundRightSide'

import { Container, Content } from './style'
import 'react-toastify/dist/ReactToastify.css';

const FindCurriculum: React.FC = () => {
  const history = useHistory()

  const [accessKey, setAccessKey] = useState('')

  //Search curriculum by key and redirect to curriculum user view
  const handleSearchCurriculum = async () => {
    try {
      const response = await api.get(`curriculums/key/${accessKey}`)
      if (response.data) {
        history.push(`curriculum/${accessKey}`)
      } else {
        toast.warn('Chave não cadastrada!')
      }
    } catch (error) {
      toast.error('Erro ao buscar chave!')
    }
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

        <div>
          <InputWithIcon name="accessKey" icon={FiKey} type="text" value={accessKey} placeholder="Chave de Acesso" onChange={e => setAccessKey(e.target.value)} />
          <Button type="button" onClick={handleSearchCurriculum}>Acessar Currículo</Button>
        </div>

        <Link to="/">cancelar</Link>
      </Content>
      <BackgroundRightSide />
    </Container>
  )
}

export default FindCurriculum