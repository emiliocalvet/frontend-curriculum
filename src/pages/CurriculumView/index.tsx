import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Slide, ToastContainer, toast } from 'react-toastify'

import api from '../../services/api'

import BackgroundLeftSide from '../../components/BackgroundLeftSide'
import Button from '../../components/Button'

import { Container, Content } from './styles'
import 'react-toastify/dist/ReactToastify.css';

interface Skill {
  skillName: string,
  skillDescription: string,
  skillProficiencyLevel: string
}

interface Curriculum {
  _id: string
  name: String
  cpf: Number
  bornDate: Date
  email: String
  phone: String
  education: String
  function: String
  accessKey: String
  skills: Skill[]
  status: string
}

const CurriculumView: React.FC = () => {
  const history = useHistory()

  const params = useParams<{ key: string }>()
  const [curriculum, setCurriculum] = useState<Curriculum>()

  //Load curriculum by gived key
  useEffect(() => {
    function loadCurriculum() {
      api.get(`/curriculums/key/${params.key}`).then(response => {
        setCurriculum({ ...response.data, bornDate: new Date(response.data.bornDate) })
      }).catch(_ => {
        toast.error('Erro ao carregar o currículo!', {
          onClose: () => history.push('/')
        })
      })
    }
    loadCurriculum()
  }, [history, params.key, setCurriculum])

  return (
    <Container>
      <BackgroundLeftSide />
      <ToastContainer
        closeButton={false}
        position="top-left"
        autoClose={3500}
        transition={Slide}
        hideProgressBar={false}
      />
      <Content>
        <h1>Acompanhe seu Currículo</h1>

        <div id="container">
          <div id="status-view">
            <h2>Status do currículo</h2>
            <h3>{curriculum?.status}</h3>
          </div>

          <div id="personalinfo-view">
            <h2>Informações Pessoais</h2>
            <p><span>Nome: </span>{curriculum?.name}</p>
            <p><span>CPF: </span>{curriculum?.cpf}</p>
            <p>
              <span>Data de Nascimento: </span>
              {curriculum && curriculum?.bornDate.getUTCDate()}
              /{curriculum && curriculum?.bornDate.getUTCMonth() + 1}
              /{curriculum && curriculum?.bornDate.getUTCFullYear()}
            </p>
            <p><span>Telefone: </span>{curriculum?.phone}</p>
            <p><span>Email: </span>{curriculum?.email}</p>
            <p><span>Escolaridade: </span>{curriculum?.education}</p>
            <p><span>Função: </span>{curriculum?.function}</p>
          </div>

          {curriculum?.skills ?
            <div id="skills-view">
              <h2>Lista de Competências</h2>
              {curriculum?.skills.map(skill => (
                <div id="skill-view" key={skill.skillName}>
                  <p><span>Nome: </span>{skill.skillName}</p>
                  <p><span>Descrição: </span> {skill.skillDescription}</p>
                  <p><span>Nível de proeficiência: </span>{skill.skillProficiencyLevel}</p>
                </div>
              ))}
            </div> : null
          }

          <Button type="button" onClick={() => history.push('/')}>
            Sair
          </Button>
        </div>
      </Content>
    </Container>
  )
}

export default CurriculumView