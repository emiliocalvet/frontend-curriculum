import { Container } from './style'
import Button from '../Button'

interface Skill {
  skillName: string,
  skillDescription: string,
  skillProficiencyLevel: string
}

type Props = {
  skills: Skill[]
  deleteSkill: Function
}

const SkillsList = ({ skills, deleteSkill }: Props) => (
  <Container>
    {
      skills ? skills.map(skill => (
        <div key={skill.skillName} className="skill-view">
          <p>Nome: {skill.skillName}</p>
          <p>Descrição: {skill.skillDescription}</p>
          <p>Nível de proeficiencia: {skill.skillProficiencyLevel}</p>

          <Button
            type="button"
            onClick={() => { deleteSkill(skill.skillName) }}
          >
            Remover
          </Button>
        </div>
      )) : null
    }
  </Container>
)

export default SkillsList