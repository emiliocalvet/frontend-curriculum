import { Path, UseFormRegister } from "react-hook-form";

import { Container } from './style'

interface Inputs {
  name: String
  bornDate: Date
  email: String
  education: String
  function: String
  accessKey: String
}

type InputProps = {
  id?: string
  label: Path<Inputs>
  register: UseFormRegister<Inputs>
  required?: boolean 
}

const EducationInput = ({ id = '', label, register, required = false }: InputProps) => (
  <Container
    id={id}
    {...register(label)}
    required
  >
    <option value="Ignorado">Escolaridade</option>
    <option value="Analfabeto">Analfabeto</option>
    <option value="Fundamental">Fundamental</option>
    <option value="Médio Incompleto">Médio Incompleto</option>
    <option value="Médio Completo">Médio Completo</option>
    <option value="Superior Incompleto">Superior Incompleto</option>
    <option value="Superior Completo">Superior Completo</option>
    <option value="Mestrado">Mestrado</option>
    <option value="Doutorado">Doutorado</option>
  </Container>
)

export default EducationInput