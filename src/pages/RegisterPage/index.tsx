import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { cpf as Cpf } from 'cpf-cnpj-validator'
import { cpfMask, phoneMask } from '../../util/mask'
import { Slide, ToastContainer, toast } from 'react-toastify'

import api from '../../services/api'

import Button from '../../components/Button'
import BackgroundLeftSide from '../../components/BackgroundLeftSide'
import RegisterForm from '../../components/RegisterForm'
import { Input, InputWithRegister, InputArea } from '../../components/Input'
import EducationInput from '../../components/EducationInput'
import SkillsList from '../../components/SkillsList'

import { Container, Content } from './styles'
import 'react-toastify/dist/ReactToastify.css';

interface Skill {
  skillName: string,
  skillDescription: string,
  skillProficiencyLevel: string
}

interface Inputs {
  name: String
  bornDate: Date
  email: String
  education: String
  function: String
  accessKey: String
}

interface Curriculum {
  name: String
  cpf: string
  bornDate: Date
  email: String
  phone: String
  education: String
  function: String
  accessKey: String
  skills: Skill[]
}

const RegisterPage: React.FC = () => {
  const history = useHistory()

  const [cpf, setCPF] = useState('')
  const [phone, setPhone] = useState('')
  const [skills, setSkills] = useState<Skill[]>([])
  const [skillName, setSkillName] = useState('')
  const [skillDescription, setSkillDescription] = useState('')
  const [skillProficiencyLevel, setSkillProficiencyLevel] = useState('')

  //React hook form for less render
  const { register, handleSubmit } = useForm<Inputs>()

  //Function to apply mask to CPF
  const handleCPF = (value: string) => {
    setCPF(cpfMask(value))
  }

  //Function to apply mask to phone number
  const handlePhone = (value: string) => {
    setPhone(phoneMask(value))
  }

  //Function to add skills in skill array
  const handleAddSkill = () => {
    try {
      let skillConflict = false
      const existentSkills = skills

      const skillToAdd: Skill = {
        skillName,
        skillDescription,
        skillProficiencyLevel
      }

      if (skillName) {
        skills.forEach(skill => {
          if (skill.skillName === skillName) {
            skillConflict = true
          }
        })

        if (!skillConflict) {
          //Adding new skill in skill array
          existentSkills.push(skillToAdd)
          setSkills(existentSkills)
        } else {
          toast.warn('Competência já adicionada!')
        }
      } else {
        toast.warn('Competência precisa de um nome!')
      }

      //Cleaning skill inputs
      setSkillName('')
      setSkillDescription('')
      setSkillProficiencyLevel('')
    } catch (_) {
      toast.error('Falha ao adicionar competência!')
    }
  }

  //Deletes selected skill, only before save
  const handleDeleteSkill = (name: string) => {
    const newSkills = skills.filter(skill => skill.skillName !== name)
    setSkills(newSkills)
  }

  //Validates the data and sends it to the backend if everything is right
  const onSubmit = async (data: Inputs) => {
    try {
      if (Cpf.isValid(cpf)) {
        const curriculum: Curriculum = {
          name: data.name,
          cpf,
          bornDate: new Date(data.bornDate),
          email: data.email,
          phone,
          education: data.education,
          function: data.function,
          accessKey: data.accessKey,
          skills: skills
        }

        await api.post('curriculums', curriculum)
        toast.success('Cadastro realizado com sucesso!', {
          onClose: () => { history.push(`curriculum/${curriculum.accessKey}`) }
        })
      }
      else {
        toast.warn('CPF inválido!')
      }
    } catch (error) {
      if (error.response) {
        const data = error.response.data
        if (data.statusCode === 409) {
          toast.warn('Essa chave já existe, tente outra diferente!')
        }
      }
    }
  }

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
        <h1>Cadastro de Currículo</h1>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>

          <div id="personalinfo-area">
            <h2>Informações Pessoais</h2>

            <InputWithRegister
              placeholder="Nome"
              label="name"
              register={register}
              required
            />

            <Input
              placeholder="CPF"
              value={cpf}
              onChange={e => handleCPF(e.target.value)}
              required
            />

            <div id="date-block">
              <span>Data de Nascimento</span>
              <InputWithRegister
                id="date-input"
                placeholder="Data de Nascimento"
                label="bornDate"
                register={register}
                type="date"
                required
              />
            </div>

            <InputWithRegister
              id="email-input"
              placeholder="Email"
              label="email"
              register={register}
              type="email"
              required
            />

            <Input
              id="phone-input"
              placeholder="Telefone"
              value={phone}
              onChange={e => handlePhone(e.target.value)}
              required
            />

            <InputWithRegister
              id="function-input"
              placeholder="Função"
              label="function"
              register={register}
              required
            />

            <div id="education-block">
              <EducationInput
                id="education-input"
                label="education"
                register={register}
                required
              />
            </div>
          </div>

          <div id="skill-area">
            <h2>Lista de Competências</h2>

            <Input
              placeholder="Nome"
              value={skillName}
              onChange={e => setSkillName(e.target.value)}
            />

            <InputArea
              placeholder="Descrição"
              value={skillDescription}
              onChange={e => setSkillDescription(e.target.value)}
            />

            <Input
              placeholder="Nível de proeficiência"
              value={skillProficiencyLevel}
              onChange={e => setSkillProficiencyLevel(e.target.value)}
            />

            <Button type="button" onClick={handleAddSkill}>Adicionar competencia</Button>
            <SkillsList skills={skills} deleteSkill={handleDeleteSkill} />
          </div>

          <div id="accesskey-area">
            <p>A chave de acesso permite acessar o curriculo e acompanhar seu status! </p>

            <InputWithRegister
              placeholder="Chave de Acesso"
              label="accessKey"
              register={register}
              required
            />
          </div>
          <Button type="submit" >Cadastrar</Button>
        </RegisterForm>
        <Link to="/">cancelar</Link>
      </Content>
    </Container>
  )
}

export default RegisterPage