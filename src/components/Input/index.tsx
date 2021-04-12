import { InputHTMLAttributes } from 'react'
import { Path, UseFormRegister } from "react-hook-form";

import { Container, AreaContainer } from './style'

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
  placeholder: string
  type?: string
  required?: boolean
}

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <Container {...props} />
)

const InputArea = (props: InputHTMLAttributes<HTMLTextAreaElement>) => (
  <AreaContainer {...props} />
)

const InputWithRegister = ({
  id = '',
  placeholder = '',
  label, register,
  type = 'text',
  required = false
}: InputProps) => (
  <Container
    placeholder={placeholder}
    type={type}
    {...register(label)}
    required
  />
)

export { Input, InputWithRegister, InputArea }