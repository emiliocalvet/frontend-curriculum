import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const InputWithIcon: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} color="#666360"/>}
    <input {...rest} />
  </Container>
)

export default InputWithIcon