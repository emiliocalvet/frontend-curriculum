import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Slide, ToastContainer, toast } from 'react-toastify'

import api from '../../services/api'

import Background from '../../components/BackgroundLeftSide'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'
import Button from '../../components/Button'

import { Container, Content } from './style'
import 'react-toastify/dist/ReactToastify.css';

interface Skill {
  skillName: string,
  skillDescription: string,
  skillProficiencyLevel: string
}

interface Curriculum {
  _id: string
  name: string
  cpf: Number
  bornDate: Date
  email: string
  phone: string
  education: string
  function: string
  accessKey: string
  skills: Skill[]
  status: string
}

interface EducationCount {
  illiterate: number,
  complete_fundamental: number,
  incomplete_medium: number,
  complete_medium: number,
  incomplete_higher: number,
  graduated: number,
  master_degree: number,
  doctorate_degree: number,
  ignored: number
}

interface StatusCount {
  waiting: number,
  approved: number,
  repproved: number,
}

const AdministrationPage: React.FC = () => {
  const history = useHistory()

  const params = useParams<{ key: string }>()
  const [curriculums, setCurriculums] = useState<Curriculum[]>([])
  const [statusCount, setStatusCount] = useState<StatusCount>({} as StatusCount)
  const [educationCount, setEducationCount] = useState<EducationCount>({} as EducationCount)

  //Load all curriculums.
  useEffect(() => {
    function loadCurriculum() {
      api.get(`/curriculums`).then(response => {
        setCurriculums(response.data)
      }).catch(_ => {
        toast.error('Erro ao carregar os currículos!')
      })
    }
    loadCurriculum()
  }, [params, setCurriculums])

  //Load data to charts
  useEffect(() => {
    async function loadChartNumbers() {
      try {
        const response = await api.get('/curriculums/status/count')
        setStatusCount(response.data)

        const response2 = await api.get('/curriculums/education/count')
        setEducationCount(response2.data)
      } catch (_) {
        toast.error('Erro ao carregar dados dos gráficos')
      }
    }
    loadChartNumbers()
  }, [])

  return (
    <Container>
      <ToastContainer
        closeButton={false}
        position="top-left"
        autoClose={3500}
        transition={Slide}
        hideProgressBar={false}
      />
      <Background />
      <Content>
        <h1>Administração</h1>
        <div id="container">
          <div id="curriculums-list">
            <h2>Lista de Currículos</h2>
            {curriculums ?
              curriculums.map(curriculum => (
                <div
                  key={curriculum.name}
                  className="curriculum"
                  onClick={() => history.push(`/adm/curriculum/${curriculum._id}`)}
                >
                  <p><span>Nome: </span>{curriculum.name}</p>
                  <p><span>Função: </span>{curriculum.function}</p>
                  <p><span>Status: </span>{curriculum.status}</p>
                </div>
              )) : null
            }
          </div>

          <div id="charts">
            <h2>Gráficos</h2>
            <PieChart data={statusCount} />
            <BarChart data={educationCount} />
          </div>

          <Button type="button" onClick={() => history.push('/')} >Sair</Button>
        </div>
      </Content>
    </Container>
  )
}

export default AdministrationPage